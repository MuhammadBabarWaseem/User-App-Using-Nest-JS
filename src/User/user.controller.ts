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
  @Get()
  getUsers() {
    return { name: 'Babar', email: 'mbabarwaseem@gmail.com' };
  }

  @Post()
  createUser(@Req() req: Request) {
    return req.body;
  }

  @Patch('/:userId')
  updateUser(@Req() req: Request) {
    return req.body;
  }

  @Get('/:userId')
  getUserById(@Param() params: { userId: number }) {
    return params;
  }

  @Delete('/:userId')
  deleteUserById(@Param() params: { userId: number }) {
    return params;
  }
}
