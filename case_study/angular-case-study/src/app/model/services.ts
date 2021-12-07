import {RentType} from './rent-type';

export interface Services {
  id?: string;
  name?: string;
  area?: number;
  floor?: number;
  maxPeople?: number;
  cost?: number;
  status?: string;
  rentType?: RentType;
}
