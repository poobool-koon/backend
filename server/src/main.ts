import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cors({
      origin: '*', // 허용할 출처
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 허용할 HTTP 메서드
      credentials: true, // 인증 정보 (쿠키 및 HTTP 인증)를 허용할지 여부
      allowedHeaders: '*', // 허용할 헤더
      exposedHeaders: 'Content-Range,X-Content-Range', // 브라우저에 노출할 헤더
    }),
  );
  await app.listen(3000);
}
bootstrap();
