import { PhoneNumber } from './PhoneNumber';
import { EmailAddress } from './EmailAddress';

export interface Contact {
  phoneNumbers: PhoneNumber[]
  emailAddresses: EmailAddress[]
}
