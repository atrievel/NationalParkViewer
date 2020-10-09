import { RelatedPark } from './RelatedPark';
import { ImageWithCrops } from './Image';
import { Topic } from './Topic';
import { Activity } from './Activity';

export interface ThingsToDo {
  location: string;
  seasonDescription: string;
  accessibilityInformation: string;
  longitude: string;
  relatedParks: RelatedPark[];
  isReservationRequired: boolean;
  ageDescription: string;
  url: string;
  petsDescription: string;
  timeOfDayDescription: string;
  images: ImageWithCrops[];
  feeDescription: string;
  id: string;
  age: string;
  arePetsPermittedwithRestrictions: boolean;
  activities: Activity[];
  activityDescription: string;
  locationDescription: string;
  doFeesApply: boolean;
  longDescription: string;
  season: string[];
  topics: Topic[];
  durationDescription: string;
  arePetsPermitted: boolean;
  timeOfDay: string[];
  title: string;
  latitude: string;
  shortDescription: string;
  duration: string;
  tags: string[];
}
