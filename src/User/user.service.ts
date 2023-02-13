import { createUserDto } from './dto/create-user-dto';
import { updateUserDto } from './dto/update-user-dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser() {
    return { name: 'M Babar Waseem', email: 'mbabarwaseem@gmail.com' };
  }
  create(createUserDto: createUserDto) {
    return createUserDto;
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
