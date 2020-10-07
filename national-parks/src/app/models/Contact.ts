export interface Contact {
  phoneNumbers: PhoneNumber[]
  emailAddresses: EmailAddress[]
}

interface PhoneNumber {
  phoneNumber: string,
  description: string,
  extension: string,
  type: Type
}

interface EmailAddress {
  emailAddress: string,
  description: string
}

enum Type {
  Voice = 'Voice',
  Fax = 'Fax',
  TTY = 'TTY'
}

