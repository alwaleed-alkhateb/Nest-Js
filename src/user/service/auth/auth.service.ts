import { Inject } from '@nestjs/common';
import { Users } from '../../interface/user.interface';
import { Model } from 'mongoose';
import { SignInDto, SignUpDto } from '../../dto/auth/auth.dto';
import * as bcrypt from 'bcrypt';

export class AuthService {
  constructor(
    @Inject('USER_MODULE') private readonly userModule: Model<Users>,
  ) {}

  public async signIn(body: SignInDto) {
    // Implementation for sign-in logic
    const { email, password } = body;

    const user = await this.userModule.findOne({ email });
    const isPasswordValid = await bcrypt.compare(password, user!.password);
    if (!user) {
      throw new Error('User not found');
    }
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    return user;
  }

  public async signUp(body: SignUpDto) {
    // Implementation for sign-up logic
    const { email, username, password, firstName, lastName } = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModule({
      email,
      username,
      password: hashedPassword,
      firstName,
      lastName,
    });
    await newUser.save();
    return newUser;
  }
}
