export interface GenericResponse<T> {
  total: number;
  data: T[];
  limit: number;
  start: number;
}
