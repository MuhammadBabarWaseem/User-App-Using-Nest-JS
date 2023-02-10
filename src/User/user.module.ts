import { Module } from '@nestjs/common';
import { userController } from './user.controller';

@Module({
  controllers: [userController],
})
export class UserModule {}
