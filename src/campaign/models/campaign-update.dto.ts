
export class CampaignUpdateDto {
    nom?: string;

    date_debut?: Date;

    date_fin?: Date;

    aire_sante?: string;

    nbre_agent?: number;

    autres?: string;
 
    signature?: string; // celui qui fait le document

    created?: Date;

    update_created?: Date; 
}