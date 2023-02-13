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

  getUser() {
    return this.userRepository.find();
  }
  create(createUserDto: createUserDto) {
    return this.userRepository.save(createUserDto);
  }
  update(updateUserDto: updateUserDto, userId: number) {
    return this.userRepository.update(userId, updateUserDto);
  }

  getUserById(userId: number) {
    return this.userRepository.findOne({ where: { id: userId } });
  }
  delete(userId: number) {
    return this.userRepository.delete(userId);
  }
}
