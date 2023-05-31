import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { ZoneSante } from './models/zone-sante.entity';

@Injectable()
export class ZoneSanteService extends AbstractService {
    constructor(
        @InjectRepository(ZoneSante) private readonly zoneSanteRepository: Repository<ZoneSante>
    ) {
        super(zoneSanteRepository); 
    }
}
