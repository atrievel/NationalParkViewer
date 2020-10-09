import { Park } from './Park';

export interface ParksResponse {
  total: number;
  data: Park[];
  limit: number;
  start: number;
}
