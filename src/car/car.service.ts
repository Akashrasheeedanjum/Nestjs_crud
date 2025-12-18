import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car, CarDocument, CarSchema } from './schemas/cars.schemas';


@Injectable()
export class CarService {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}

  // Get all cars
  async getCars(): Promise<Car[]> {
    return this.carModel.find().exec();
  }

  // Get single car by numeric carId
  async getCarById(carId: number): Promise<Car> {
    const car = await this.carModel.findOne({ carId });
    if (!car) throw new NotFoundException(`Car with id ${carId} not found`);
    return car;
  }

  // Create new car
  async createCar(data: { brand: string; color: string; model: string; carId: number }): Promise<Car> {
    const newCar = new this.carModel(data);
    return newCar.save();
  }

  // Update car
  async updateCar(carId: number, updateData: { brand?: string; color?: string; model?: string }): Promise<Car> {
    const updated = await this.carModel.findOneAndUpdate({ carId }, updateData, { new: true });
    if (!updated) throw new NotFoundException(`Car with id ${carId} not found`);
    return updated;
  }

  // Delete car
  async deleteCar(carId: number): Promise<Car> {
    const deleted = await this.carModel.findOneAndDelete({ carId });
    if (!deleted) throw new NotFoundException(`Car with id ${carId} not found`);
    return deleted;
  }
}
