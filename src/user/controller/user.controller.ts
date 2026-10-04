import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  find() {
    return this.userService.find();
  }
}
