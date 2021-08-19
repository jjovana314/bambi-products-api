import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "src/auth/auth.module";
import { LoginController } from "./login.controller";
import { LoginService } from "./login.service";
import { LoginSchema } from "./schemas/login.schema";


@Module({
    imports: [
      MongooseModule.forFeature([
        { name: 'Login', schema: LoginSchema }
      ]),
      AuthModule
    ],
    controllers: [LoginController],
    providers: [LoginService],
    exports: [LoginService]
})
export class LoginModule {} 