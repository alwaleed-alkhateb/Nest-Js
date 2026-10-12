import { Model } from 'mongoose';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from '../interface/user.interface.js';
import { CreateUserDto } from '../dto/createUser.dto.js';
import { UpdateUserDto } from '../dto/updateUser.dto.js';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_MODEL') private userModel: Model<Users>) {}

  find() {
    return this.userModel.find();
  }

  async findUserById(userId: string) {
    const user = await this.userModel.findById(userId).select('-email');
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  createUser(userData: CreateUserDto) {
    return this.userModel.create(userData);
  }

  async updateUser(userId: string, UpdateUserDto: UpdateUserDto) {
    const user = await this.userModel.findByIdAndUpdate(userId, UpdateUserDto, {
      new: true,
    });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async deleteUser(userId: string) {
    const user = await this.userModel.findByIdAndDelete(userId);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
}
