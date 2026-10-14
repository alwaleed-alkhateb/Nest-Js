import { Module } from '@nestjs/common';
import { UsersController } from './controller/admin/user.controller';
import { UsersService } from './service/admin/user.service';
import { userProviders } from './provider/user.provider';
import {
  AuthSignInController,
  AuthSignUpController,
} from './controller/auth/auth.controller';
import { AuthService } from './service/auth/auth.service';

@Module({
  controllers: [UsersController, AuthSignInController, AuthSignUpController],
  providers: [...userProviders, UsersService, AuthService],
})
export class UserModule {}
