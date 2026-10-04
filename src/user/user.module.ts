import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UsersService } from './service/user.service';
import { userProviders } from './provider/user.provider';
import { databaseProviders } from '../database/database.module';

@Module({
  controllers: [UserController],
  providers: [...userProviders, UsersService, ...databaseProviders],
})
export class UserModule {}
