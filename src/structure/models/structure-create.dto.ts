import { IsNotEmpty } from "class-validator";

export class StructureCreateDto {
    @IsNotEmpty()
    nom_complet: string;

    @IsNotEmpty()
    single: string;

    @IsNotEmpty()
    manager: string; 

    @IsNotEmpty()
    signature: string; // celui qui fait le document

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created: Date; 
}