import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post()
  async register(
    @Body()
    body: any,
  ) {
    console.log(body);
    this.usersService.registerUser(
      body.user.userid,
      body.password,
      body.user.username,
    );
  }
  @Get()
  async find(@Query() q) {
    const user = await this.usersService.findUser(q.userid);
    console.log(user);
    return user;
  }
}
