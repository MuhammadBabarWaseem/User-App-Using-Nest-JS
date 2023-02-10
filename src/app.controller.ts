import {
  Controller,
  Get,
  Post,
  Req,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
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
