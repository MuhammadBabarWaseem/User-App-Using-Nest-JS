import { UserService } from './user.service';
import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Req,
  Delete,
  Body,
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
  // createUser(@Req() req: Request) { or
  createUser(@Body() body: any) {
    return this.userService.create(body);
  }

  @Patch('/:userId')
  updateUser(@Param() param: { userId: number }, @Body() body: any) {
    return this.userService.update(body, param);
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
