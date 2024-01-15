import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { BlogPost } from './posts.scheme';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(BlogPost)
    private usersRepository: Repository<BlogPost>,
    private dataSource: DataSource,
  ) {}

  findAll(): Promise<BlogPost[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<BlogPost | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
  async create(user: BlogPost) {
    console.log(JSON.stringify(user));
    this.usersRepository.save(user);
  }

  async update(id: number, user: BlogPost) {
    console.log(JSON.stringify(user));
    this.usersRepository.update(
      { id },
      { title: user.title, content: user.content },
    );
  }
}
