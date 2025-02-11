import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOAuth2, ApiTags } from '@nestjs/swagger';

import { AuthenticateUserUseCase } from '@/domain/use-cases/auth/authenticate-user.use-case';
import { RegisterLocalUserUseCase } from '@/domain/use-cases/auth/register-local-user.use-case';
import { LoginLocalUserUseCase } from '@/domain/use-cases/auth/login-local-user.use-case';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';
import { AuthProvider } from '@/domain/enums/auth-provider.enum';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private readonly authenticateSocialUserUseCase: AuthenticateUserUseCase,
    private readonly registerLocalUserUseCase: RegisterLocalUserUseCase,
    private readonly loginLocalUserUseCase: LoginLocalUserUseCase,
  ) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.registerLocalUserUseCase.execute(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.loginLocalUserUseCase.execute(loginDto);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleAuth() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthCallback(@Req() req) {
    return this.authenticateSocialUserUseCase.execute(AuthProvider.GOOGLE, req.user);
  }

  @Get('facebook')
  @UseGuards(AuthGuard('facebook'))
  facebookAuth() {}

  @Get('facebook/callback')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuthCallback(@Req() req) {
    return this.authenticateSocialUserUseCase.execute(AuthProvider.FACEBOOK, req.user);
  }

  @ApiOAuth2(['read'])
  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  getProfile(@Req() req) {
    return req.user;
  }
}
