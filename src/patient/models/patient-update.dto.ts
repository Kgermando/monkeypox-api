export class PatientUpdateDto {
    photo?: string;

    postnom?: string;

    prenom?: string;

    sexe?: string;

    age_an?: number;
   
    age_mois?: number;
   
    fourchette_age?: number;

    lieu_residence?: string;  // Village ou quartier
   
    aire_sante?: string;

    profession?: string;
   
    email?: string;

    telephone?: string;
   
    signature?: string; // celui qui fait le document

    created?: Date;
   
    update_created?: Date; 
}