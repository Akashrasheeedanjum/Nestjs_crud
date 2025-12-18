import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'process';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CarModule , ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI!)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
