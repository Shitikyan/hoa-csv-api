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
    default: '',
  })
  Ref_ID: string;

  @property({
    type: 'string',
    default: '',
  })
  PropertyFullStreetAddress: string;

  @property({
    type: 'string',
    default: '',
  })
  PropertyCity: string;

  @property({
    type: 'string',
    default: '',
  })
  PropertyState: string;

  @property({
    type: 'string',
    default: '',
  })
  PropertyZip: string;

  @property({
    type: 'string',
    default: '',
  })
  APN: string;

  @property({
    type: 'number',
    default: 0,
  })
  Client: number;

  @property({
    type: 'number',
    default: 0,
  })
  Loan_Type: number;

  @property({
    type: 'string',
    default: '',
  })
  Referral_Date: string;

  @property({
    type: 'string',
    default: '',
  })
  U20_Actual_Date: string;

  @property({
    type: 'string',
    default: '',
  })
  Voluntary: string;

  @property({
    type: 'string',
    default: '',
  })
  Non_Voluntary: string;

  @property({
    type: 'string',
    default: '',
  })
  FIPS: string;

  @property({
    type: 'string',
    default: '',
  })
  State: string;

  @property({
    type: 'string',
    default: '',
  })
  County: string;

  @property({
    type: 'string',
    default: '',
  })
  Parcel: string;

  @property({
    type: 'string',
    default: '',
  })
  CurrentOwner: string;

  @property({
    type: 'string',
    default: '',
  })
  ParsedHouseNumber: string;

  @property({
    type: 'string',
    default: '',
  })
  ParsedStreetPreDir: string;

  @property({
    type: 'string',
    default: '',
  })
  ParsedStreetName: string;

  @property({
    type: 'string',
    default: '',
  })
  ParsedStreetTypeSuffix: string;

  @property({
    type: 'string',
    default: '',
  })
  ParsedStreetPostDir: string;

  @property({
    type: 'string',
    default: '',
  })
  ParsedUnitType: string;

  @property({
    type: 'string',
    default: '',
  })
  ParsedUnitNumber: string;

  @property({
    type: 'string',
    default: '',
  })
  STNDAddress: string;

  @property({
    type: 'string',
    default: '',
  })
  STNDUnitType: string;

  @property({
    type: 'string',
    default: '',
  })
  STNDUnitNum: string;

  @property({
    type: 'string',
    default: '',
  })
  STNDCity: string;

  @property({
    type: 'string',
    default: '',
  })
  STNDState: string;

  @property({
    type: 'string',
    default: '',
  })
  STNDZip: string;

  @property({
    type: 'number',
    default: 0,
  })
  STNDZip4: number;

  @property({
    type: 'string',
    default: '',
  })
  LandUseDesc: string;

  @property({
    type: 'number',
    default: 0,
  })
  YearBuilt: number;

  @property({
    type: 'string',
    default: '',
  })
  Block: string;

  @property({
    type: 'string',
    default: '',
  })
  Lot: string;

  @property({
    type: 'string',
    default: '',
  })
  Subdivision: string;

  @property({
    type: 'string',
    default: '',
  })
  BriefLegal: string;

  @property({
    type: 'string',
    default: '',
  })
  Zone: string;

  @property({
    type: 'string',
    default: '',
  })
  LatestSale_RecordingDate: string;

  @property({
    type: 'number',
    default: 0,
  })
  LatestSale_Book: number;

  @property({
    type: 'number',
    default: 0,
  })
  LatestSale_Page: number;

  @property({
    type: 'number',
    default: 0,
  })
  LatestSale_DocNumber: number;

  @property({
    type: 'string',
    default: '',
  })
  LatestSale_DocType: string;

  @property({
    type: 'string',
    default: '',
  })
  LatestSale_Subdivision: string;

  @property({
    type: 'string',
    default: '',
  })
  LatestSale_BriefLegal: string;

  @property({
    type: 'string',
    default: '',
  })
  LatestSale_CondoRider: string;

  @property({
    type: 'string',
    default: '',
  })
  LatestSale_PUDRider: string;

  @property({
    type: 'string',
    default: '',
  })
  LatestLoan_RecordingDate: string;

  @property({
    type: 'number',
    default: 0,
  })
  LatestLoan_Book: number;

  @property({
    type: 'number',
    default: 0,
  })
  LatestLoan_Page: number;

  @property({
    type: 'number',
    default: 0,
  })
  LatestLoan_DocNumber: number;

  @property({
    type: 'string',
    default: '',
  })
  LatestLoan_Subdivision: string;

  @property({
    type: 'string',
    default: '',
  })
  LatestLoan_CondoRider: string;

  @property({
    type: 'string',
    default: '',
  })
  LatestLoan_PUDRider: string;

  @property({
    type: 'string',
    default: '',
  })
  LatestLoan_Source: string;

  @property({
    type: 'string',
    default: '',
  })
  Match: string;

  @property({
    type: 'string',
    default: '',
  })
  Zip9HOAIndicator: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_Indicator: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_Flag: string;

  @property({
    type: 'string',
    default: '',
  })
  Comments: string;

  @property({
    type: 'string',
    default: '',
  })
  PropertyAddress: string;

  @property({
    type: 'string',
    default: '',
  })
  City: string;

  @property({
    type: 'string',
    default: '',
  })
  ZipCode: string;

  @property({
    type: 'string',
    default: '',
  })
  ReportDate: string;

  @property({
    type: 'string',
    default: '',
  })
  NbrOfHOAs: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_1_Name: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_1_Type: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_1_Contact_Type: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_1_Contact_Name: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_1_Address_Mailing: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_1_City: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_1_State: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_1_Zip_Code: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_1_Contact_Phone_Type: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_1_Contact_Phone: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_1_Contact_Email: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_Contact_Type_2: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_1_Management_Company_Name: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_1_Management_Company_Address: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_1_Mangement_Company_City: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_1_Management_Company_State: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_1_Management_Company_Zip_Code: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_1_Management_Company_Phone_Type: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_1_Management_Company_Phone: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_1_Management_Company_Email: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_Name: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_Type: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_Contact_Type: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_Contact_Name: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_Address_Mailing: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_City: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_State: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_Zip_Code: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_Contact_Phone_Type: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_Contact_Phone: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_Contact_Email: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_Management_Company_Name: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_Management_Company_Contact_Name: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_Management_Company_Address: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_Mangement_Company_City: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_Management_Company_State: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_Management_Company_Zip_Code: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_Management_Company_Phone_Type: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_Management_Company_Phone: string;

  @property({
    type: 'string',
    default: '',
  })
  HOA_2_Management_Company_Email: string;

  @property({
    type: 'boolean', default: true,
  })
  pending: boolean;

  @belongsTo(() => Batch)
  batchId: string;

  getId() {
    return this.id;
  }

  constructor(data?: Partial<BatchRow>) {
    super(data);
  }
}

export interface BatchRowRelations {
  batch?: BatchWithRelations;
}

export type BatchRowWithRelations = BatchRow & BatchRowRelations;
