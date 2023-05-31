import { IsNotEmpty } from "class-validator";

export class RegisterDto {
   
    @IsNotEmpty()
    structure: string;

    photo: string; 

    @IsNotEmpty()
    nom: string;

    @IsNotEmpty()
    postnom: string;

    @IsNotEmpty()
    prenom: string;

    @IsNotEmpty()
    sexe: string;

    @IsNotEmpty()
    nationalite: string;

    @IsNotEmpty()
    etat_civile: string; 
    
    @IsNotEmpty()
    adresse: string; 

    @IsNotEmpty()
    titre: string;
    
    @IsNotEmpty()
    pays: string; // RDC

    @IsNotEmpty()
    province: string;

    @IsNotEmpty()
    zone_sante: string; 

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    telephone: string; 
    
    // Accès
    @IsNotEmpty()
    matricule: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    password_confirm: string;

    @IsNotEmpty()
    signature: string; // celui qui fait le document

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created : Date; 


   
}