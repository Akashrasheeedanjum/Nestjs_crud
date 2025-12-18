import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema({ timestamps: true })
export class Car {
  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  color: string;

  @Prop({ required: true })
  model: string;

  @Prop({ required: true, unique: true })
  carId: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);
