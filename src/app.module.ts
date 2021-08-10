import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from './login/login.module';
import config from './config/address';
import { AdminModule } from './admin/admin.module';
import { ProductModule } from './product/product.module';
import { ProductsModule } from './products/products.module';
import { RegisterModule } from './register/register.module';

@Module({
    imports: [
      LoginModule,
      AdminModule,
      ProductModule,
      ProductsModule,
      RegisterModule,
      MongooseModule.forRoot(config.mongodbURI,     // note: using docker ip address: 172.17.0.1
      { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }),
    ],
  controllers: [AppController], 
  providers: [AppService]
})
export class AppModule {}
