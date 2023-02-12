import { updateUserDto } from './dto/user-update.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser() {
    return { name: 'M Babar Waseem', email: 'mbabarwaseem@gmail.com' };
  }
  create(body: any) {
    return body;
  }
  update(updateUserDto: updateUserDto, param: { userId: number }) {
    return { updateUserDto, param };
  }
  getUserById(param: { userId: number }) {
    return param;
  }
  delete(param: { userId: number }) {
    return param;
  }
}
