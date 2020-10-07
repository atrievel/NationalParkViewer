import { RelatedParks } from './RelatedParks';
import { Images } from './Images';
import { Activities } from './Activities';
import { Topics } from './Topics';

export interface ThingsToDo {
    location: string;
    seasonDescription: string;
    accessibilityInformation: string;
    longitude: string;
    relatedParks: RelatedParks[];
    isReservationRequired: boolean;
    ageDescription: string;
    url: string;
    petsDescription: string;
    timeOfDayDescription: string;
    images: Images[];
    feeDescription: string;
    id: string;
    age: string;
    arePetsPermittedwithRestrictions: boolean;
    activities: Activities[];
    activityDescription: string;
    locationDescription: string;
    doFeesApply: boolean;
    longDescription: string;
    season: string[];
    topics: Topics[];
    durationDescription: string;
    arePetsPermitted: boolean;
    timeOfDay: string[];
    title: string;
    latitude: string;
    shortDescription: string;
    duration: string;
    tags: string[];
}
