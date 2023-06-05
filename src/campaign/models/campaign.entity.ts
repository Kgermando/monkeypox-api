import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Campaign {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    date_debut: Date;

    @Column()
    date_fin: Date;

    @Column()
    aire_sante: string;

    @Column()
    nbre_agent: number;

    @Column()
    autres: string;
 
    @Column()
    signature: string; // celui qui fait le document

    @Column()
    created: Date;

    @Column()
    update_created: Date; 

}