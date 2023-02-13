import { createUserDto } from './dto/create-user-dto';
import { UserService } from './user.service';
import { updateUserDto } from './dto/update-user-dto';
import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  Body,
  ParseIntPipe,
} from '@nestjs/common';

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
  createUser(@Body() createUserDto: createUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch('/:userId')
  updateUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() updateUserDto: updateUserDto,
  ) {
    return this.userService.update(updateUserDto, userId);
  }

  @Get('/:userId')
  getUserById(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getUserById(userId);
  }

  @Delete('/:userId')
  deleteUserById(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}
