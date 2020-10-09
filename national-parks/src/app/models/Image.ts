import { Crop } from './Crop';

export interface Image {
  credit: string;
  altText: string;
  title: string;
  caption: string;
  url: string
}

export interface ImageWithCrops extends Image {
  crops: Crop[]
}
