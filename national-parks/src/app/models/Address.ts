export interface Address {
  postalCode: string,
  city: string,
  stateCode: string,
  line1: string,
  line2: string,
  line3: string,
  type: Type
}

enum Type {
  Physical = 'Physical',
  Mailing = 'Mailing'
}
