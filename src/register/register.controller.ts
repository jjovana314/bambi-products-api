import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Model } from 'mongoose';
import { RegisterDto } from './dto/register.interface.dto';
import { UpdatePasswordDto } from './dto/update.password.interface.dto';
import { UpdateUsernameDto } from './dto/update.username.interface.dto';
import { Register } from './interfaces/register.interface';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) { }

  @Post()
  async registerUser(@Body() userData: RegisterDto): Promise<Register> {
    const result = await this.registerService.registerUser(userData);
    this.registerService.registerLogs(result, 'registered');
    return await result;
  }

  @Get('isRegistered/:username')
  async isRegistered(@Param('username') username: string): Promise<Register> {
    return await this.registerService.isRegistered(username);
  }

  @Delete(':id')
  deleteUser(@Param('id') id) {
    this.registerService.deleteUser(id);
  }

  @Patch('updatePassword/:id')
  async updatePassword(
    @Param('id') id: string, @Body() updateData: UpdatePasswordDto
  ): Promise<Register> {
    const result = await this.registerService.updatePassword(id, updateData);
    this.registerService.registerLogs(result, 'password updated');
    return await result;
  }

  @Patch('updateUsername/:id')
  async updateUsername(
    @Param('id') id: string, @Body() updateData: UpdateUsernameDto
  ): Promise<Register> {
    const result = await this.registerService.updateUsername(id, updateData);
    this.registerService.registerLogs(result, 'username updated');
    return await result;
  }

}
