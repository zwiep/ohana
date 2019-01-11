import {Person} from "../../app/model/person";

export const PERSON_DATA: Person[] = [
  {
    id: '{SOME-UUID-ID-01-01-01}',
    lastName: 'Doe',
    firstName: 'John',
    middleName: 'Sod',
    streetName: 'Somestreet',
    houseNumber: '34tT',
    postalCode: '2162',
    city: 'Karhu',
    country: 'Safrica',
    email: 'this.is@email.me',
    phoneNumber: '+32 1x 87 98 xx',
    mobilePhoneNumber: '+32 4x5 87 98 xx',
    birthDate: new Date(1977,5,6),
    birthPlace: 'Here'
  },
  {
    id: '{SOME-UUID-ID-02-02-02}',
    lastName: 'Doyle',
    firstName: 'Jane',
    middleName: 'Susan',
    streetName: 'OtherStreet',
    houseNumber: '98',
    postalCode: '8998',
    city: 'Cairo',
    country: 'Egypt',
    email: 'also.am@email.me',
    phoneNumber: '+66 1x 56 24 xx',
    mobilePhoneNumber: '+66 6xx x6 98 xx',
    birthDate: new Date(1978,1,22),
    birthPlace: 'There'
  },
  {
    id: '{SOME-UUID-ID-03-03-03}',
    lastName: 'God',
    firstName: 'Dammit',
    middleName: 'Karen',
    streetName: 'That Street',
    houseNumber: '848',
    postalCode: 'ABC35325',
    city: 'Ottawa',
    country: 'Canada',
    email: 'email.me.eh@email.me',
    phoneNumber: '+75 14 xx 24 12',
    mobilePhoneNumber: '+75 51x 46 98 xx',
    birthDate: new Date(1985,4,30),
    birthPlace: 'Not There'
  }
];
