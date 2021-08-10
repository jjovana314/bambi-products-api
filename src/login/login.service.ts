import { HttpCode, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from './dto/login.interface.dto';
import { Model } from 'mongoose';
import { Login } from './interfaces/login.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel('Login') private readonly loginModel: Model<Login>
  ) { }

  async login(loginInfo: LoginDto): Promise<Login> {
    const newLoginUser = new this.loginModel(loginInfo);
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
}