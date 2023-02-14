import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Controller } from '@nestjs/common';
import { Post, Request, UseGuards } from '@nestjs/common/decorators';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
