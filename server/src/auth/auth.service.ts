import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { createHash } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(userid: string, password: string): Promise<any> {
    const passhash = this.hash(password);
    const user = await this.usersService.findUser(userid);
    if (passhash == user?.passhash) {
      const payload = { sub: userid };
      console.log('login');
      console.log(user);
      const token = await this.jwtService.signAsync(payload);
      console.log(token);
      return {
        userid: user.userid,
        username: user.username,
        access_token: token,
      };
    } else {
      console.log('Login Denied');
      throw new UnauthorizedException();
    }
  }
  hash(word: string) {
    return createHash('sha256').update(word).digest('hex');
  }
}
