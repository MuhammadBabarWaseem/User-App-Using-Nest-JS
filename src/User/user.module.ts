import { userController } from './user.controller';
import { Module } from '@nestjs/common';
@Module({
  controllers: [userController],
})
export class userModule {}
