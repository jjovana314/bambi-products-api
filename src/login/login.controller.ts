import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.interface.dto';
import { LoginService } from './login.service';
import { Login } from './interfaces/login.interface';
import { RegisterService } from 'src/register/register.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService,
    private readonly registerService: RegisterService) { }

  @Post()
  async login(@Body() loginInfo: LoginDto): Promise<Login> {
    await this.registerService.validateLogin(
      loginInfo.username, loginInfo.password
    )
    const result = this.loginService.login(loginInfo);
    var date = new Date().toLocaleString('hu-HU', { timeZone: 'CET' });
    console.log(
      `User: ${loginInfo.username} logged in at: ${date}`
    )
    return await result;
  }

  @Get(':id')
  findUser(@Param('id') id): Promise<Login> {
    return this.loginService.findUser(id);
  }

  @Get('findByUsername/:username')
  async findUserByUsername(@Param('username') username): Promise<Login> {
    await this.loginService.userExist(username);
    return await this.loginService.findByUsername(username);
  }

  @Get()
  async listAllUsers() {
    return await this.loginService.listAllUsers();
  }

  @Get('logout/:_id')
  async logout(@Param('_id') _id: string) {
    await this.loginService.logout(_id);
    var date = new Date().toLocaleString('hu-HU', { timeZone: 'CET' });
    console.log(
      `User with id: ${_id} logged out at: ${date}`
    );
  }
}