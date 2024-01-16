import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}
  @Post('')
  async post(@Body() body: { userid: string; password: string }) {
    return await this.loginService.signIn(body.userid, body.password);
  }
}
