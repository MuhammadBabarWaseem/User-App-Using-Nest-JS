import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);

    if (user) {
      if (user.password === password) {
        return user;
      }
      return `Password doesn't match`;
    }
    return 'Not A Authenticated User';
  }
}
