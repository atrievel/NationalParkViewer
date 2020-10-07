import { Activity } from './Activity';
import { Address } from './Address';
import { Contact } from './Contact';
import { EntranceFee } from './EntranceFee';
import { EntrancePass } from './EntrancePass';

export interface Park {
    activities: Activity[];
    addresses: Address[];
    contact: Contact[]
    description: string;
    designation: string;
    directionsInfo: string;
    directionsUrl: string;
    entranceFees: EntranceFee[]
    entrancePasses: EntrancePass[]
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
