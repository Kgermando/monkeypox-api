import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { Structure } from './models/structure.entity';

@Injectable()
export class StructureService extends AbstractService {
    constructor(
        @InjectRepository(Structure) private readonly structureRepository: Repository<Structure>
    ) {
        super(structureRepository); 
    }
}
