import { ThingsToDo } from './ThingsToDo';

export interface ActivitiesResponse {
  total: number;
  data: ThingsToDo[];
  limit: number;
  start: string;
}
