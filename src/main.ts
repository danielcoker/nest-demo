import { NestFactory } from '@nestjs/core';
import { Module, Controller, Get } from '@nestjs/common';

@Controller()
class AppController {
  @Get('test')
  getTest() {
    return {
      status: 'ok',
      service: 'nestjs-demo',
      environment: process.env.NODE_ENV || 'development',
      timestamp: new Date().toISOString(),
    };
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Important for containers / Coolify
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');

  console.log(`Server running on port ${port}`);
}
bootstrap();
