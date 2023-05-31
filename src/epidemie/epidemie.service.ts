import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { Epidemie } from './moidels/epidemie.entity';

@Injectable()
export class EpidemieService extends AbstractService {
    constructor(
        @InjectRepository(Epidemie) private readonly epidemieRepository: Repository<Epidemie>
    ) {
        super(epidemieRepository); 
    }
}