import { UserService } from './user.service';
import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Req,
  Delete,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('/user')
export class userController {
  // created a constructor to get the functions from user.service.ts file
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUser();
  }

  @Post()
  createUser(@Req() req: Request) {
    return this.userService.create(req);
  }

  @Patch('/:userId')
  updateUser(@Param() param: { userId: number }, @Req() req: Request) {
    return this.userService.update(req, param);
  }

  @Get('/:userId')
  getUserById(@Param() param: { userId: number }) {
    return this.userService.getUserById(param);
  }

  @Delete('/:userId')
  deleteUserById(@Param() param: { userId: number }) {
    return this.userService.delete(param);
  }
}
