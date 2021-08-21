import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "src/auth/auth.module";
import { LoginController } from "./login.controller";
import { LoginService } from "./login.service";
import { LoginSchema } from "./schemas/login.schema";
import { JwtModule } from "@nestjs/jwt";


@Module({
    imports: [
      MongooseModule.forFeature([
        { name: 'Login', schema: LoginSchema }
      ]),
      AuthModule,
      JwtModule.register({
        secret: 'Secret code never let outsiders',
        signOptions: {
          expiresIn: '60s'
        }
      })
    ],
    controllers: [LoginController],
    providers: [LoginService],
    exports: [LoginService]
})
export class LoginModule {} 