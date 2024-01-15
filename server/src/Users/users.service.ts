import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Hash, createHash } from 'crypto';
import { User } from 'src/Users/users.scheme';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async registerUser(
    userid: string,
    password: string,
    username: string,
  ): Promise<boolean> {
    const user: User = { userid, passhash: this.hash(password), username };
    console.log(user);
    try {
      await this.usersRepository.save(user);
    } catch (e) {
      console.log(e);
      return false;
    }
    return true;
  }
  hash(word: string) {
    return createHash('sha256').update(word).digest('hex');
  }
  async findUser(userid: string) {
    const user = await this.usersRepository.findOneBy({ userid });
    return user;
  }
}
