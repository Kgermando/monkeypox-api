import { IsNotEmpty } from "class-validator";

export class PatientCreateDto {
    @IsNotEmpty()
    photo: string; 

    @IsNotEmpty()
    fullname: string; 

    @IsNotEmpty()
    sexe: string;

    @IsNotEmpty()
    age_an: number;

    @IsNotEmpty()
    age_mois: number;

    @IsNotEmpty()
    fourchette_age: string;

    @IsNotEmpty()
    lieu_residence: string;  // Village ou quartier

    @IsNotEmpty()
    aire_sante: string;

    @IsNotEmpty()
    profession: string; 

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    telephone: string;

    @IsNotEmpty()
    province: string;
 
    @IsNotEmpty()
    signature: string; // celui qui fait le document

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created : Date; 
}