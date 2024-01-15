import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { BlogPost, BlogPostDTO } from './posts.scheme';
import { randomInt } from 'crypto';

@Controller('posts')
export class PostsController {
  constructor(private usersService: PostsService) {}

  @Get()
  async findAll(): Promise<BlogPost[]> {
    console.log('GET POST');
    return this.usersService.findAll();
  }
  @Get(':id')
  async find(@Param() params: any): Promise<BlogPost> {
    console.log('GET POST:' + params.id);
    return this.usersService.findOne(params.id);
  }
  @Post()
  async create(@Body() user: BlogPost) {
    console.log('Post User:' + JSON.stringify(user));
    user.id = undefined;
    user.userid = randomInt(0, 1000);
    this.usersService.create(user);
    return user;
  }
  @Put(':id')
  async update(@Param() params: any, @Body() blogpost: BlogPost) {
    console.log('PUT POST:' + params.id);
    this.usersService.update(params.id, blogpost);
  }
  @Delete(':id')
  async delete(@Param() params) {
    console.log('DELETE POST:' + params.id);
    this.usersService.remove(params.id);
  }
}
