import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UsersGuard } from '../../guard/user.guard';
import { UsersService } from '../../service/admin/user.service';
import { Roles } from '../../guard/role.decorator';
import { CreateUserDto } from '../../dto/admin/createUser.dto';
import { UpdateUserDto } from '../../dto/admin/updateUser.dto';

@Controller('users')
@UseGuards(UsersGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // ====================================================================== \\
  // @desc  Get All Users
  // @Route Get /users
  // @access  Private [Admin, Manger]
  @Roles(['admin', 'Manger']) // Roles + Guard + Jwt = secured
  @Get()
  gatAllUsers() {
    return this.usersService.find();
  }
  // ====================================================================== \\
  // ====================================================================== \\
  // @desc  Get User By Id
  // @Route Get /users/:userId
  // @access  Private [Admin, Manger]
  @Roles(['admin', 'Manger'])
  @Get(':userId')
  gatUsersById(@Param('userId') userId: string) {
    return this.usersService.findUserById(userId);
  }
  // ====================================================================== \\
  // @desc  Create User
  // @Route Post /users
  // @access  Private [Admin]
  @Roles(['admin'])
  @Post()
  createUser(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    body: CreateUserDto,
  ) {
    return this.usersService.createUser(body);
  }
  // ====================================================================== \\
  // @desc  Update User By Id
  // @Route Patch /users/:userId
  // @access  Private [Admin, Manger]
  @Roles(['admin', 'Manger'])
  @Patch(':userId')
  updateUser(
    @Param('userId') userId: string,
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    body: UpdateUserDto,
  ) {
    return this.usersService.updateUser(userId, body);
  }
  // ====================================================================== \\
  // @desc  Delete User By Id
  // @Route Delete /users/:userId
  // @access  Private [Admin]
  @Roles(['admin'])
  @Delete(':userId')
  deleteUser(@Param('userId') userId: string) {
    return this.usersService.deleteUser(userId);
  }
  // ====================================================================== \\
}
