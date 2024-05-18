import { kycStatus } from "@prisma/client";


interface KYC {
  id : number;
  userId:number;
  firstName:string
  lastName:string
  dob:Date
  address:string
  city:string
  state:string
  country:string
  postalCode:string
  idFront:string
  idBack:string
  selfie:string
  status:kycStatus
  createdAt:Date
}

