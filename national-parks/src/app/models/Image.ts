import { Crop } from './Crop';

export interface Image {
  credit: string;
  crops?: Crop[];
  altText: string;
  title: string;
  caption: string;
  url: string
}
