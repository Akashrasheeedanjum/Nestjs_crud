import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 // Parse JSON
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  const options=new DocumentBuilder()
.setTitle("CRUD Operation")
.setDescription("By Using Car Items Performs CRUD Operations")
.setVersion('1.0')
.build();
const document=SwaggerModule.createDocument(app,options);
SwaggerModule.setup("api",app,document)

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
