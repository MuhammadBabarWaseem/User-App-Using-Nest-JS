import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { userController } from './user.controller';
import { UserService } from './user.service';
import { User } from './entity/user.entity';

@Module({
  controllers: [userController],
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UserService],
})
export class UserModule {}
