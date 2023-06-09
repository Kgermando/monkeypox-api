import { IsNotEmpty } from "class-validator";

export class CampaignCreateDto {
    @IsNotEmpty()
    nom: string;

    @IsNotEmpty()
    date_debut: Date;

    @IsNotEmpty()
    date_fin: Date;

    @IsNotEmpty()
    aire_sante: string;

    @IsNotEmpty()
    nbre_agent: number; 
 
    @IsNotEmpty()
    signature: string; // celui qui fait le document

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created: Date; 
}