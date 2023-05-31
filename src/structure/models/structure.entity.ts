import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Structure {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom_complet: string;

    @Column()
    single: string;

    @Column()
    manager: string;
 
    @Column()
    signature: string; // celui qui fait le document

    @Column()
    created: Date;

    @Column()
    update_created: Date; 

}