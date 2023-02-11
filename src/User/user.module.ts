import { Module } from '@nestjs/common';
import { userController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [userController],
  providers: [UserService],
})
export class UserModule {}
