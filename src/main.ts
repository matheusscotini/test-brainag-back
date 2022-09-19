import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: { credentials: true, origin: true },
    });

    app.setGlobalPrefix('api');

    await app.listen(9000);
}
bootstrap();
