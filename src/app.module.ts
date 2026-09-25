import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProductModule, ReviewModule, UserModule],
})
export class AppModule {}
