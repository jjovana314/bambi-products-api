import { HttpCode, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Register } from './interfaces/register.interface';
import { RegisterDto } from './dto/register.interface.dto';
import { Observable, from, of, switchMap, lastValueFrom } from 'rxjs';
import { boolean } from 'yargs';
import { UpdatePasswordDto } from './dto/update.password.interface.dto';
import { UpdateUsernameDto } from './dto/update.username.interface.dto';

const bcrypt = require('bcrypt');
const saltRounds = 12;

@Injectable()
export class RegisterService {
  constructor(
    @InjectModel('Register') private readonly registerModel: Model<Register>
  ) { }

  async registerUser(userData: RegisterDto): Promise<Register> {
    const passHashed = await bcrypt.hash(userData.password, saltRounds);
    // put hashed password in userData
    const user = await this.registerModel.findOne({ username: userData.username });
    if (user) {
      throw new HttpException(
        `User with username: ${userData.username} already exists.`,
        HttpStatus.BAD_REQUEST
      );
    }
    userData = {
      ...userData,
      password: passHashed
    };
    const newUser = new this.registerModel(userData);
    return await newUser.save();
  }

  async registerLogs(userData: Register, action: string) {
    var date = new Date().toLocaleString('hu-HU', { timeZone: 'CET' });
    console.log(
      `User with id: ${userData._id} --- ${action} at: ${date}`
    );
  }

  async isRegistered(username: string) {
    var user = await this.registerModel.findOne({
      username: username
    });
    if (!user) {
      throw new HttpException(
        `User: ${username} is not registered`,
        HttpStatus.NOT_FOUND
      );
    }
    return await user;
  }

  async validateLogin(username: string, password: string) {
    var user = await this.isRegistered(username);
    var passwordsEqual = await bcrypt.compare(password, user.password);
    if (!passwordsEqual) {
      throw new HttpException(
        `Password for ${(await user).username} is not valid.`,
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async deleteUser(id: string) {
    await this.registerModel.findOneAndRemove({ _id: id });
  }

  async updatePassword(id: string, updateData: UpdatePasswordDto): Promise<Register> {
    const userData = (await this.registerModel.findById(id)).toObject();
    const passwordsEqual = await bcrypt.compare(
      updateData.newPassword, userData.password
    );
    if (passwordsEqual) {
      throw new HttpException('Old password cannot be new password', HttpStatus.BAD_REQUEST);
    }
    else {
      const newPassHashed = await bcrypt.hash(
        updateData.newPassword, saltRounds
      );
      return await this.registerModel.findOneAndUpdate(
        { username: userData.username },
        { $set: { password: newPassHashed } }
      );
    }
  }

  async updateUsername(id: string, updateData: UpdateUsernameDto): Promise<Register> {
    const userData = (await this.registerModel.findById(id)).toObject();
    const passwordsEqual = bcrypt.compare(updateData.password, userData.password)
    if (!passwordsEqual) {
      throw new HttpException(
        `Password for user: ${userData.username} is not valid.`,
        HttpStatus.BAD_REQUEST
      );
    }
    if (userData.username == updateData.newUsername) {
      throw new HttpException('Please enter new username', HttpStatus.BAD_REQUEST);
    }
    return await this.registerModel.findOneAndUpdate(
      { username: userData.username },
      { $set: { username: updateData.newUsername } }
    );
  }
}
