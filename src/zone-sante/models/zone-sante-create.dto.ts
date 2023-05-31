import { IsNotEmpty } from "class-validator";

export class ZoneSanteCreateDto {

    @IsNotEmpty()
    zone: string; 

    @IsNotEmpty()
    province: string;

    @IsNotEmpty()
    territoire: string; 
 
    @IsNotEmpty()
    signature: string; // celui qui fait le document

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created: Date; 
}