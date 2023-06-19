import { IsNotEmpty } from "class-validator";

export class EpidemieCreateDto { 
    @IsNotEmpty()
    pays: string;

    @IsNotEmpty()
    province: string;

    @IsNotEmpty()
    zone_sante: string;

    @IsNotEmpty()
    num_epi: string;

    @IsNotEmpty()
    semaine_epi: number;

    @IsNotEmpty()
    date_notification: Date;

    @IsNotEmpty()
    patient_id: number; 

    @IsNotEmpty()
    fievre: string;

    @IsNotEmpty()
    eruption_cutanee: string;

    @IsNotEmpty()
    date_symptome: Date;

    @IsNotEmpty()
    autres: string; 

    @IsNotEmpty()
    date_admition: Date;

    @IsNotEmpty()
    date_diagonstic: Date; 

    @IsNotEmpty()
    structure: string;  

    @IsNotEmpty()
    a_ete_contact_patient: string;  

    @IsNotEmpty()
    type_contact: string;  
    
    @IsNotEmpty()
    a_ete_hospitalise: string;

    @IsNotEmpty()
    croute: string;

    @IsNotEmpty()
    ecouvillon: string; 

    @IsNotEmpty()
    prevelement_sanguin: string;

    @IsNotEmpty()
    date_prelevement: Date; 

    @IsNotEmpty()
    date_expedition: Date; 

    @IsNotEmpty()
    statut: string;

    @IsNotEmpty()
    commentaire: string;

    @IsNotEmpty()
    campaign: string;

    @IsNotEmpty()
    epidemie: string;
 
    @IsNotEmpty()
    signature: string; // celui qui fait le document

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created: Date; 
}