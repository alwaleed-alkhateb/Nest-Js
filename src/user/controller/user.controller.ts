import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '../service/user.service';
import { CreateUserDto } from '../dto/createUser.dto';
import { UpdateUserDto } from '../dto/updateUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  // dce get all user
  // method GET
  // access private [admin , user]
  @Get()
  find() {
    return this.userService.find();
  }

  // dce get user By id
  // method GET
  // access private [admin , user]
  @Get(':userId')
  findUserById(@Param('userId') userId: string) {
    return this.userService.findUserById(userId);
  }

  // dce create user
  // method POST
  // access private [admin , user]
  @Post()
  createUser(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    userData: CreateUserDto,
  ) {
    return this.userService.createUser(userData);
  }

  // dce update user
  // method PUT
  // access private [admin , user]
  @Patch(':userId')
  updateUser(
    @Param('userId') userId: string,
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    UpdateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(userId, UpdateUserDto);
  }

  // dce update user
  // method PUT
  // access private [admin , user]
  @Patch(':userId')
  deleteUser(@Param('userId') userId: string) {
    return this.userService.deleteUser(userId);
  }
}
