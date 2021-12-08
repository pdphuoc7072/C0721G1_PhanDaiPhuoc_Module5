import {Employee} from './employee';
import {Customer} from './customer';
import {Services} from './services';

export interface Contract {
  id?: number;
  startDate?: string;
  endDate?: string;
  deposit?: number;
  total?: number;
  employee?: Employee;
  customer?: Customer;
  services?: Services;
}
