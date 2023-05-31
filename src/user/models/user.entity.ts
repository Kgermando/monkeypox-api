import { Exclude } from "class-transformer"; 
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    structure: string;

    @Column()
    photo: string;

    @Column()
    nom: string;

    @Column()
    postnom: string;

    @Column()
    prenom: string;

    @Column()
    sexe: string;

    @Column()
    nationalite: string;

    @Column()
    etat_civile: string;

    @Column()
    adresse: string; 

    @Column()
    titre: string;
    
    @Column()
    pays: string; // RDC

    @Column()
    province: string;

    @Column()
    zone_sante: string; 

    @Column()
    email: string;

    @Column()
    telephone: string; 

    // Accès
    @Column({unique : true})
    matricule: string;

    @Column()
    @Exclude()
    password: string;

    @Column()
    signature: string; // celui qui fait le document

    @Column()
    created: Date;

    @Column()
    update_created: Date; 

}