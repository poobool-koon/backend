import { Injectable } from '@nestjs/common';
import { User } from '../Users/users.scheme';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Hash, UUID, createHash } from 'crypto';

@Injectable()
export class LoginService {
  sessions: Session[] = [];
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async validateUser(userid: string, password: string): Promise<string> {
    const passhash = this.hash(password);
    const record = await this.usersRepository.findOneBy({ userid });
    if (passhash == record.passhash) {
      return '';
    } else {
      return '';
    }
  }
  hash(word: string) {
    return createHash('sha256').update(word).digest('hex');
  }
  createSession(userid: string) {
    const uuid = crypto.randomUUID();
    const session: Session = { session_id: userid, token: uuid };
    this.sessions.push(session);
  }
  validateSession(userid: string, token: UUID): boolean {}
}

class Session {
  session_id: string;
  userid: string;
}
