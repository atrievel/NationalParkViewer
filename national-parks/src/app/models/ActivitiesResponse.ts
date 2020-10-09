import { Activity } from './Activity';

export interface ActivitiesResponse {
  total: number;
  data: Activity[];
  limit: number;
  start: number;
}
