import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
  @Get('/api/users')
  public getAllUsers() {
    return [{ id: 1, username: 'ali' }];
  }
}
