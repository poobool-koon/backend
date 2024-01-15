import { Body, Controller, Get, Post } from '@nestjs/common';
import { createHash } from 'crypto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}
  @Post()
  async post(@Body() body: { userid: string; password: string }) {
    return this.loginService.validateUser(body.userid, body.password);
  }
}
