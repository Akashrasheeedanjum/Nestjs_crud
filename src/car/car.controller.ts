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

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  // 🔹 GET all cars
  @Get()
  getAllCars() {
    return this.carService.getCars();
  }

  // 🔹 GET car by numeric carId
  @Get(':carId')
  getCarById(@Param('carId', ParseIntPipe) carId: number) {
    return this.carService.getCarById(carId);
  }

  // 🔹 CREATE new car
  @Post()
  createCar(
    @Body()
    body: {
      carId: number;
      brand: string;
      color: string;
      model: string;
    },
  ) {
    return this.carService.createCar(body);
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
