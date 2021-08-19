import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RegisterController } from "./register.controller";
import { RegisterService } from "./register.service";
import { RegisterSchema } from "./schemas/register.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Register', schema: RegisterSchema }
    ])
  ],
  controllers: [RegisterController],
  providers: [RegisterService],
  exports: [RegisterService]
})
export class RegisterModule { }