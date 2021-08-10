import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RegisterModule } from "src/register/register.module";
import { LoginController } from "./login.controller";
import { LoginService } from "./login.service";
import { LoginSchema } from "./schemas/login.schema";


@Module({
    imports: [MongooseModule.forFeature([{name: 'Login', schema: LoginSchema}]), RegisterModule],
    controllers: [LoginController],
    providers: [LoginService],
    exports: [LoginService]
})
export class LoginModule {} 