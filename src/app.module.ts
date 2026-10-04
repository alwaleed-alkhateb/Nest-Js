import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { databaseProviders } from './database/database.module';

@Module({
  imports: [UserModule],
  providers: [...databaseProviders],
})
export class AppModule {}
