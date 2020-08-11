import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Batch, BatchWithRelations } from '.';

@model()
export class BatchRow extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id: string;

  @property({
    type: 'string',
  })
  Ref_ID: string;

  @property({
    type: 'string'
  })
  PropertyFullStreetAddress: string;

  @property({
    type: 'string',
  })
  PropertyCity: string;

  @property({
    type: 'string',
  })
  PropertyState: string;

  @property({
    type: 'string',
  })
  PropertyZip: string;

  @property({
    type: 'string',
  })
  APN: string;

  @property({
    type: 'number',
  })
  Client: number;

  @property({
    type: 'number',
  })
  Loan_Type: number;

  @property({
    type: 'string',
  })
  Referral_Date: string;

  @property({
    type: 'string',
  })
  U20_Actual_Date: string;

  @property({
    type: 'string',
  })
  Voluntary: string;

  @property({
    type: 'string',
  })
  Non_Voluntary: string;

  @property({
    type: 'string',
  })
  FIPS: string;

  @property({
    type: 'string',
  })
  State: string;

  @property({
    type: 'string',
  })
  County: string;

  @property({
    type: 'string',
  })
  Parcel: string;

  @property({
    type: 'string',
  })
  CurrentOwner: string;

  @property({
    type: 'string',
  })
  ParsedHouseNumber: string;

  @property({
    type: 'string',
  })
  ParsedStreetPreDir: string;

  @property({
    type: 'string',
  })
  ParsedStreetName: string;

  @property({
    type: 'string',
  })
  ParsedStreetTypeSuffix: string;

  @property({
    type: 'string',
  })
  ParsedStreetPostDir: string;

  @property({
    type: 'string',
  })
  ParsedUnitType: string;

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
  LandUseDesc: string;

  @property({
    type: 'number',
  })
  YearBuilt: number;

  @property({
    type: 'string',
  })
  Block: string;

  @property({
    type: 'string',
  })
  Lot: string;

  @property({
    type: 'string',
  })
  Subdivision: string;

  @property({
    type: 'string',
  })
  BriefLegal: string;

  @property({
    type: 'string',
  })
  Zone: string;

  @property({
    type: 'string',
  })
  LatestSale_RecordingDate: string;

  @property({
    type: 'number',
  })
  LatestSale_Book: number;

  @property({
    type: 'number',
  })
  LatestSale_Page: number;

  @property({
    type: 'number',
  })
  LatestSale_DocNumber: number;

  @property({
    type: 'string',
  })
  LatestSale_DocType: string;

  @property({
    type: 'string',
  })
  LatestSale_Subdivision: string;

  @property({
    type: 'string',
  })
  LatestSale_BriefLegal: string;

  @property({
    type: 'string',
  })
  LatestSale_CondoRider: string;

  @property({
    type: 'string',
  })
  LatestSale_PUDRider: string;

  @property({
    type: 'string',
  })
  LatestLoan_RecordingDate: string;

  @property({
    type: 'number',
  })
  LatestLoan_Book: number;

  @property({
    type: 'number',
  })
  LatestLoan_Page: number;

  @property({
    type: 'number',
  })
  LatestLoan_DocNumber: number;

  @property({
    type: 'string',
  })
  LatestLoan_Subdivision: string;

  @property({
    type: 'string',
  })
  LatestLoan_CondoRider: string;

  @property({
    type: 'string',
  })
  LatestLoan_PUDRider: string;

  @property({
    type: 'string',
  })
  LatestLoan_Source: string;

  @property({
    type: 'string',
  })
  Match: string;

  @property({
    type: 'string',
  })
  Zip9HOAIndicator: string;

  @property({
    type: 'string',
  })
  HOA_Indicator: string;

  @property({
    type: 'string',
  })
  HOA_Flag: string;

  @property({
    type: 'string',
  })
  Comments: string;

  @property({
    type: 'string',
  })
  PropertyAddress: string;

  @property({
    type: 'string',
  })
  City: string;

  @property({
    type: 'string',
  })
  ZipCode: string;

  @property({
    type: 'string',
  })
  ReportDate: string;

  @property({
    type: 'string',
  })
  NbrOfHOAs: string;

  @property({
    type: 'string',
  })
  HOA_1_Name: string;

  @property({
    type: 'string',
  })
  HOA_1_Type: string;

  @property({
    type: 'string',
  })
  HOA_1_Contact_Type: string;

  @property({
    type: 'string',
  })
  HOA_1_Contact_Name: string;

  @property({
    type: 'string',
  })
  HOA_1_Address_Mailing: string;

  @property({
    type: 'string',
  })
  HOA_1_City: string;

  @property({
    type: 'string',
  })
  HOA_1_State: string;

  @property({
    type: 'string',
  })
  HOA_1_Zip_Code: string;

  @property({
    type: 'string',
  })
  HOA_1_Contact_Phone_Type: string;

  @property({
    type: 'string',
  })
  HOA_1_Contact_Phone: string;

  @property({
    type: 'string',
  })
  HOA_1_Contact_Email: string;

  @property({
    type: 'string',
  })
  HOA_Contact_Type_2: string;

  @property({
    type: 'string',
  })
  HOA_1_Management_Company_Name: string;

  @property({
    type: 'string',
  })
  HOA_1_Management_Company_Address: string;

  @property({
    type: 'string',
  })
  HOA_1_Mangement_Company_City: string;

  @property({
    type: 'string',
  })
  HOA_1_Management_Company_State: string;

  @property({
    type: 'string',
  })
  HOA_1_Management_Company_Zip_Code: string;

  @property({
    type: 'string',
  })
  HOA_1_Management_Company_Phone_Type: string;

  @property({
    type: 'string',
  })
  HOA_1_Management_Company_Phone: string;

  @property({
    type: 'string',
  })
  HOA_1_Management_Company_Email: string;

  @property({
    type: 'string',
  })
  HOA_2_Name: string;

  @property({
    type: 'string',
  })
  HOA_2_Type: string;

  @property({
    type: 'string',
  })
  HOA_2_Contact_Type: string;

  @property({
    type: 'string',
  })
  HOA_2_Contact_Name: string;

  @property({
    type: 'string',
  })
  HOA_2_Address_Mailing: string;

  @property({
    type: 'string',
  })
  HOA_2_City: string;

  @property({
    type: 'string',
  })
  HOA_2_State: string;

  @property({
    type: 'string',
  })
  HOA_2_Zip_Code: string;

  @property({
    type: 'string',
  })
  HOA_2_Contact_Phone_Type: string;

  @property({
    type: 'string',
  })
  HOA_2_Contact_Phone: string;

  @property({
    type: 'string',
  })
  HOA_2_Contact_Email: string;

  @property({
    type: 'string',
  })
  HOA_2_Management_Company_Name: string;

  @property({
    type: 'string',
  })
  HOA_2_Management_Company_Contact_Name: string;

  @property({
    type: 'string',
  })
  HOA_2_Management_Company_Address: string;

  @property({
    type: 'string',
  })
  HOA_2_Mangement_Company_City: string;

  @property({
    type: 'string',
  })
  HOA_2_Management_Company_State: string;

  @property({
    type: 'string',
  })
  HOA_2_Management_Company_Zip_Code: string;

  @property({
    type: 'string',
  })
  HOA_2_Management_Company_Phone_Type: string;

  @property({
    type: 'string',
  })
  HOA_2_Management_Company_Phone: string;

  @property({
    type: 'string',
  })
  HOA_2_Management_Company_Email: string;

  @belongsTo(() => Batch)
  batchId: string;

  constructor(data?: Partial<BatchRow>) {
    super(data);
  }
}

export interface BatchRowRelations {
  batch?: BatchWithRelations;
}

export type BatchRowWithRelations = BatchRow & BatchRowRelations;
