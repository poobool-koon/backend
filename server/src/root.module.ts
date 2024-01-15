import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './Posts/posts.service';
import { PostsController } from './Posts/posts.controller';
import { BlogPost } from './Posts/posts.scheme';
import { LoginController } from 'src/Login/login.controller';
import { LoginService } from './Login/login.service';
import { User } from './Users/users.scheme';
import { UsersController } from './Users/users.controller';
import { UsersService } from './Users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlogPost, User])],
  providers: [PostsService, LoginService, UsersService],
  controllers: [PostsController, LoginController, UsersController],
})
export class RootModule {}
