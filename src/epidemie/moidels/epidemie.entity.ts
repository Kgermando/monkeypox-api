import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Epidemie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pays: string;

    @Column()
    province: string;

    @Column()
    zone_sante: string;

    @Column()
    num_epi: string; // Numero epidemiologique

    @Column()
    semaine_epi: number;

    @Column()
    date_notification: Date;

    @Column()
    patient_id: number; 

    @Column()
    fievre: boolean;

    @Column()
    eruption_cutanee: boolean;

    @Column()
    date_symptome: Date;

    @Column()
    autres: string;  // Village ou quartier

    @Column()
    date_admition: Date;

    @Column()
    date_diagonstic: Date; 

    @Column()
    structure: string; // Nom de la stucture Ex: ONG Ged

    @Column()
    a_ete_contact_patient: boolean; // a ete en contact avec un patient

    @Column()
    type_contact: string;  
    
    @Column()
    a_ete_hospitalise: boolean;

    @Column()
    croute: string;

    @Column()
    ecouvillon: string; 

    @Column()
    prevelement_sanguin: string;

    @Column()
    date_prelevement: Date; 

    @Column()
    date_expedition: Date; 

    @Column()
    statut: string;

    @Column()
    commentaire: string;

    @Column()
    campaign: string;

    @Column({default: 'Monkeypox'})
    epidemie: string;
 
    @Column()
    signature: string; // celui qui fait le document

    @Column()
    created: Date;

    @Column()
    update_created: Date; 

}