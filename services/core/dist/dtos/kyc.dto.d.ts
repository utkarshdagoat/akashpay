export declare class CreateKYCDto {
    firstName: string;
    lastName: string;
    dob: Date;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    idFront: string;
    idBack: string;
    selfie: string;
}
export declare class CreateKYCPayload {
    data: CreateKYCDto;
    userId: string;
}
