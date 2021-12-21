import {City} from './city';

export interface Car {
  id?: number;
  typeOfCar?: string;
  nameOfCar?: string;
  departureOfCity?: City;
  destinationOfCity?: City;
  phone?: string;
  email?: string;
  departureOfTime?: string;
  destinationOfTime?: string;
}
