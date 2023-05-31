import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ZoneSante {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    zone: string; 

    @Column()
    province: string;

    @Column()
    territoire: string; 

    @Column()
    signature: string; // celui qui fait le document

    @Column()
    created: Date;

    @Column()
    update_created: Date; 

}