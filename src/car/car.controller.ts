import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  //  GET all cars
  @Get()
  getAllCars() {
    return this.carService.getCars();
  }

  //  GET car by numeric carId
  @Get(':carId')
  getCarById(@Param('carId', ParseIntPipe) carId: number) {
    return this.carService.getCarById(carId);
  }

  // CREATE new car

@Post()
async createCar(@Body() createCarDto: CreateCarDto) {
  console.log('Received DTO:', createCarDto);
  try {
    const car = await this.carService.createCar(createCarDto);
    return car;
  } catch (error) {
    console.error('CREATE CAR ERROR:', error);
    throw error;
  }
}

  // 🔹 UPDATE car
  @Put(':carId')
  updateCar(
    @Param('carId', ParseIntPipe) carId: number,
    @Body()
    body: {
      brand?: string;
      color?: string;
      model?: string;
    },
  ) {
    return this.carService.updateCar(carId, body);
  }

  // 🔹 DELETE car
  @Delete(':carId')
  deleteCar(@Param('carId', ParseIntPipe) carId: number) {
    return this.carService.deleteCar(carId);
  }
}
