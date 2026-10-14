import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../../service/auth/auth.service';
import { SignInDto, SignUpDto } from '../../dto/auth/auth.dto';

@Controller('auth/sign-in')
export class AuthSignInController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  public async signIn(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    body: SignInDto,
  ) {
    return this.authService.signIn(body);
  }
}

@Controller('auth/sign-up')
export class AuthSignUpController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  public async signUp(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    body: SignUpDto,
  ) {
    return this.authService.signUp(body);
  }
}
