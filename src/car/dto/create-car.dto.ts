import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateCarDto {
  @IsNumber()
  carId: number;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  model: string;
}
