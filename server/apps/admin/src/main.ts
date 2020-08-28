import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from '../../../filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  
  await app.listen(3000);
  console.log(`http://localhost:3000 admin后台`)
}
bootstrap();
