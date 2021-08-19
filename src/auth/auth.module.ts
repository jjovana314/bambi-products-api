import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { LocalStrategy } from "./auth.local.strategy";
import { AuthService } from "./auth.service";
import { RegisterModule } from "src/register/register.module";
import { MongooseModule } from "@nestjs/mongoose";
import { RegisterSchema } from "src/register/schemas/register.schema";


@Module({
    imports: [RegisterModule],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy],
    exports: [AuthService, LocalStrategy]
})
export class AuthModule {}