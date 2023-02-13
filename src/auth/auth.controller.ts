import { UserService } from './../user/user.service';
import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';

@Controller('auth')
export class AuthController {
  constructor(private UserService: UserService) {}

  @Post('/login')
  async login(@Body() loginDto: any) {
    const user = await this.UserService.findByEmail(loginDto.email);

    if (user) {
      if (user.password === loginDto.password) {
        return user;
      }
      return `Password doesn't match`;
    }
    return 'Not A Authenticated User';
  }
}
