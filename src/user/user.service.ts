import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}

  async findAll() {
    const user = await this.user.find();
    return { data: user, count: user.length };
  }

  async create(CreateUserDto) {
    const user = await this.user.create(CreateUserDto);
    return this.user.save(user);
  }

  async findOne(id) {
    const user = await this.user.findOne({ where: { id: id } });
    if (!user) {
      throw new NotFoundException();
    }
    return { data: user };
  }

  async update(id, updateUserDto) {
    const user = await this.user.findOne({ where: { id: id } });
    if (!user) {
      throw new NotFoundException();
    }
    return this.user.save({ ...user, ...UpdateUserDto });
  }

  async remove(id) {
    const user = await this.user.findOne({ where: { id: id } });
    if (!user) {
      throw new NotFoundException();
    }
    await this.user.delete(id);
    return { res: 'user has been deleted' + id };
  }
}
