import { Activity } from './Activity';

export interface Park {
    activities: Activity[]
    // addresses: TODO: create interface for this;
    // contacts: TODO: create interface for this;
    description: string;
    designation: string;
    directionsInfo: string;
    directionsUrl: string;
    //entranceFees: TODO: create interface for this;
    //entrancePasses: TODO: create interface for this;
    fullName: string;
    id: string;
    //images: TODO: create interface for this;
    latLong: string;
    latitude: string;
    longitude: string;
    name: string;
    //operatingHours TODO: create interface for this;
    parkCode: string;
    states: string;
    url: string;
    weatherInfo: string;
}
