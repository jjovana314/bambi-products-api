import { HttpCode, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from './dto/login.interface.dto';
import { Model } from 'mongoose';
import { Login } from './interfaces/login.interface';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

const bcrypt = require('bcrypt');
const salt = 12;

@Injectable()
export class LoginService {
  constructor(
    private jwtService: JwtService,
    @InjectModel('Login') private readonly loginModel: Model<Login>
  ) { }

  async login(loginInfo: LoginDto): Promise<Login> {
    const passHashed = await bcrypt.hash(loginInfo.password, salt);
    loginInfo = {
      ...loginInfo,
      password: passHashed
    };
    let userDataWithToken = {
      ...loginInfo,
      token: this.jwtService.sign(loginInfo)
    };
    const newLoginUser = new this.loginModel(userDataWithToken);
    return await newLoginUser.save();
  }

  async findUser(id: string): Promise<Login> {
    // find one user by id
    return await this.loginModel.findById(id);
  }

  async findByUsername(username: string): Promise<Login> {
    return await this.loginModel.findOne({ username: username });
  }

  async userExist(username: string) {
    const userByUsername = await this.loginModel.findOne({
      username: username
    });

    if (!userByUsername) {
      throw new NotFoundException(
        `User with username: ${username} cannot be found.`
      );
    }
  }

  async listAllUsers() {
    return await this.loginModel.find();
  }

  async logout(id: string) {
    await this.loginModel.findByIdAndRemove(id);
  }

  async removeAllUsers() {
    await this.loginModel.remove();
  }
}