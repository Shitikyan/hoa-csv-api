import {Entity, model, property} from '@loopback/repository';

@model()
export class BatchRow extends Entity {
  @property({
    type: 'string',
    id: true,
    mongodb: {dataType: 'ObjectId'},
  })
  id: string;

  @property({
    type: 'string',
  })
  refId: string;

  @property({
    type: 'string'
  })
  propertyFullStreetAddress: string;

  @property({
    type: 'string',
  })
  propertyCity: string;

  @property({
    type: 'string',
  })
  propertyState: string;

  @property({
    type: 'string',
  })
  propertyZip: string;

  @property({
    type: 'string',
  })
  apn: string;

  @property({
    type: 'number',
  })
  client: number;

  @property({
    type: 'number',
  })
  loanType: number;

  @property({
    type: 'Date',
  })
  refferalDate: Date;

  @property({
    type: 'Date',
  })
  U20ActualDate: Date;

  @property({
    type: 'string',
  })
  voluntary: string;

  @property({
    type: 'string',
  })
  nonVoluntary: string;

  @property({
    type: 'string',
  })
  fips: string;

  @property({
    type: 'string',
  })
  state: string;

  @property({
    type: 'string',
  })
  country: string;

  @property({
    type: 'string',
  })
  parcel: string;

  @property({
    type: 'string',
  })
  currentOwner: string;

  @property({
    type: 'string',
  })
  parserHouseNumber: string;

  @property({
    type: 'string',
  })
  parsedStreetPreDir: string;

  @property({
    type: 'string',
  })
  parserStreetName: string;

  @property({
    type: 'string',
  })
  parserStreetTypeSuffix: string;

  @property({
    type: 'string',
  })
  parsedStreetPostDir: string;

  @property({
    type: 'string',
  })
  parsedUnitType: string;

  @property({
    type: 'string',
  })
  ParsedUnitNumber: string;

  @property({
    type: 'number',
  })
  STNDAddress: number;

  @property({
    type: 'string',
  })
  STNDUnitType: string;

  @property({
    type: 'string',
  })
  STNDUnitNum: string;

  @property({
    type: 'string',
  })
  STNDCity: string;

  @property({
    type: 'string',
  })
  STNDState: string;

  @property({
    type: 'string',
  })
  STNDZip: string;

  @property({
    type: 'number',
  })
  STNDZip4: number;

  @property({
    type: 'string',
  })
  landUseDesc: string;

  @property({
    type: 'number',
  })
  yearBuilt: number;

  @property({
    type: 'string',
  })
  block: string;

  @property({
    type: 'string',
  })
  lot: string;

  @property({
    type: 'string',
  })
  subDivision: string;

  @property({
    type: 'string',
  })
  briefLegal: string;

  @property({
    type: 'string',
  })
  zone: string;

  @property({
    type: 'Date',
  })
  latestSaleRecordingDate: Date;

  @property({
    type: 'number',
  })
  latestSaleBook: number;

  @property({
    type: 'number',
  })
  latestSalePage: number;

  @property({
    type: 'number',
  })
  latestSaleDocNumber: number;

  @property({
    type: 'string',
  })
  latestSaleDocType: string;

  @property({
    type: 'string',
  })
  latestSaleSubdivision: string;

  @property({
    type: 'string',
  })
  latestSaleBriefLegal: string;

  @property({
    type: 'string',
  })
  latestSaleCondoRider: string;

  @property({
    type: 'string',
  })
  latestSalePUDRider: string;

  @property({
    type: 'Date',
  })
  latestLoanRecordingDate: Date;

  @property({
    type: 'number',
  })
  latestLoanBook: number;

  @property({
    type: 'number',
  })
  latestLoanPage: number;

  @property({
    type: 'number',
  })
  latestLoanDocNumber: number;

  @property({
    type: 'string',
  })
  latestLoanSubdivision: string;

  @property({
    type: 'string',
  })
  latestLoanCondoRider: string;

  @property({
    type: 'string',
  })
  latestLoanPUDRider: string;

  @property({
    type: 'string',
  })
  latestLoanSource: string;

  @property({
    type: 'string',
  })
  match: string;

  @property({
    type: 'string',
  })
  zip9HOAIndicator: string;

  @property({
    type: 'string',
  })
  HOAIndicator: string;

  @property({
    type: 'string',
  })
  HOAFlag: string;

  @property({
    type: 'string',
  })
  comments: string;

  @property({
    type: 'string',
  })
  propertyAddress: string;

  @property({
    type: 'string',
  })
  city: string;

  @property({
    type: 'string',
  })
  zipCode: string;

  @property({
    type: 'Date',
  })
  reportDate: Date;

  @property({
    type: 'string',
  })
  nbrOfHOAs: string;

  @property({
    type: 'string',
  })
  HOA1Name: string;

  @property({
    type: 'string',
  })
  HOA1Type: string;

  @property({
    type: 'string',
  })
  HOA1ContactType: string;

  @property({
    type: 'string',
  })
  HOA1ContactName: string;

  @property({
    type: 'string',
  })
  HOA1AddressMailing: string;

  @property({
    type: 'string',
  })
  HOA1City: string;

  @property({
    type: 'string',
  })
  HOA1State: string;

  @property({
    type: 'string',
  })
  HOA1ZipCode: string;

  @property({
    type: 'string',
  })
  HOA1ContactPhoneType: string;

  @property({
    type: 'string',
  })
  HOA1ContactPhone: string;

  @property({
    type: 'string',
  })
  HOA1ContactEmail: string;

  @property({
    type: 'string',
  })
  HOA1ContactType2: string;

  @property({
    type: 'string',
  })
  HOA1ManagementCompanyName: string;

  @property({
    type: 'string',
  })
  HOA1ManagementCompanyAddress: string;

  @property({
    type: 'string',
  })
  HOA1ManagementCompanyCity: string;

  @property({
    type: 'string',
  })
  HOA1ManagementCompanyState: string;

  @property({
    type: 'string',
  })
  HOA1ManagementCompanyZipCode: string;

  @property({
    type: 'string',
  })
  HOA1ManagementCompanyPhoneType: string;

  @property({
    type: 'string',
  })
  HOA1ManagementCompanyPhone: string;

  @property({
    type: 'string',
  })
  HOA1ManagementCompanyEmail: string;

  @property({
    type: 'string',
  })
  HOA2Name: string;

  @property({
    type: 'string',
  })
  HOA2Type: string;

  @property({
    type: 'string',
  })
  HOA2ContactType: string;

  @property({
    type: 'string',
  })
  HOA2ContactName: string;

  @property({
    type: 'string',
  })
  HOA2AddressMailing: string;

  @property({
    type: 'string',
  })
  HOA2City: string;

  @property({
    type: 'string',
  })
  HOA2State: string;

  @property({
    type: 'string',
  })
  HOA2ZipCode: string;

  @property({
    type: 'string',
  })
  HOA2ContactPhoneType: string;

  @property({
    type: 'string',
  })
  HOA2ContactPhone: string;

  @property({
    type: 'string',
  })
  HOA2ContactEmail: string;

  @property({
    type: 'string',
  })
  HOA2ManagementCompanyName: string;

  @property({
    type: 'string',
  })
  HOA2ManagementCompanyContactName: string;

  @property({
    type: 'string',
  })
  HOA2ManagementCompanyAddress: string;

  @property({
    type: 'string',
  })
  HOA2ManagementCompanyCity: string;

  @property({
    type: 'string',
  })
  HOA2ManagementCompanyState: string;

  @property({
    type: 'string',
  })
  HOA2ManagementCompanyZipCode: string;

  @property({
    type: 'string',
  })
  HOA2ManagementCompanyPhoneType: string;

  @property({
    type: 'string',
  })
  HOA2ManagementCompanyPhone: string;

  @property({
    type: 'string',
  })
  HOA2ManagementCompanyEmail: string;

  constructor(data?: Partial<BatchRow>) {
    super(data);
  }
}

export interface BatchRowRelations {
  // describe navigational properties here
}

export type BatchWithRelations = BatchRow & BatchRowRelations;
