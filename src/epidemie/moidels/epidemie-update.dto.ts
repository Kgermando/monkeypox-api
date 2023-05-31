
export class EpidemieUpdateDto {
   
    pays?: string;
 
    province?: string;
 
    semaine_epi?: number; 

    date_notification?: Date; 
   
    patient_id?: number; 
   
    fievre?: boolean;
 
    eruption_cutanee?: boolean;
 
    date_symptome?: Date;
 
    autres?: string;  
 
    date_admition?: Date;
 
    date_diagonstic?: Date; 
 
    structure?: string;  
 
    a_ete_contact_patient?: boolean;  
 
    type_contact?: string;   
   
    a_ete_hospitalise?: boolean; 
   
    croute?: string;
 
    ecouvillon?: string;  

    prevelement_sanguin?: string; 
   
    date_prelevement?: Date;  

    date_expedition?: Date; 
 
    statut?: string;
 
    commentaire?: string;
 
    campaign?: string;
  
    signature?: string; // celui qui fait le document
 
    created?: Date;
 
    update_created?: Date; 
}