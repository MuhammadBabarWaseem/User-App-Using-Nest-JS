import { createUserDto } from './dto/create-user-dto';
import { updateUserDto } from './dto/update-user-dto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getUser(): Promise<User[]> {
    return this.userRepository.find();
  }
  create(createUserDto: createUserDto) {
    return createUserDto;
  }
  update(updateUserDto: updateUserDto, userId: number) {
    return { updateUserDto, userId };
  }
  getUserById(userId: number) {
    return { userId };
  }
  delete(userId: number) {
    return { userId };
  }
}
