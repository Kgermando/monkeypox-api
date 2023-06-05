import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Patient {
    @PrimaryGeneratedColumn()
    id: number;

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
    age_an: number;

    @Column()
    age_mois: number;

    @Column()
    fourchette_age: string;

    @Column()
    lieu_residence: string;  // Village ou quartier

    @Column()
    aire_sante: string;

    @Column()
    profession: string; 

    @Column()
    email: string;

    @Column()
    telephone: string;
 
    @Column()
    signature: string; // celui qui fait le document

    @Column()
    created: Date;

    @Column()
    update_created : Date; 

}