import { IsString, IsUrl } from "class-validator";

export class CreateAndUpdateApplicationDto {

    @IsString()
    public name: string;

    @IsString()
    public description: string;

    @IsUrl()
    public callbackUris: string[];

}

