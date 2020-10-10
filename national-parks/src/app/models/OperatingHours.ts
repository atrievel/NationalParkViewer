import { Hours } from './Hours';
import { ExceptionHours } from './ExceptionHours';

export interface OperatingHours {
  name: string;
  description: string;
  standardHours: Hours;
  exceptions: ExceptionHours[]
}
