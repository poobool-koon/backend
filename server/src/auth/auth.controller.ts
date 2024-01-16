import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('')
  async post(@Body() body: { userid: string; password: string }) {
    return await this.authService.signIn(body.userid, body.password);
  }
}
