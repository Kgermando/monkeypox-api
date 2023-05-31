export class UserUpdateDto {

    structure?: string;

    photo?: string;

    nom?: string;

    postnom?: string;

    prenom?: string;

    sexe?: string;

    nationalite?: string;

    etat_civile?: string;

    adresse?: string; 

    titre?: string;

    pays?: string; // RDC

    province?: string;

    zone_sante?: string; 

    email?: string;

    telephone?: string; 

    matricule?: string; 
    
    signature?: string; // celui qui fait le document
 
    created?: Date;

    update_created?: Date; 
}