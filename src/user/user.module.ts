import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UsersService } from './service/user.service';
import { userProviders } from './provider/user.provider';

@Module({
  controllers: [UserController],
  providers: [...userProviders, UsersService],
})
export class UserModule {}
