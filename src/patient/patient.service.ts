import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm/repository/Repository';
import { Patient } from './models/patient.entity';

@Injectable()
export class PatientService extends AbstractService {
    constructor(
        @InjectRepository(Patient) private readonly patientRepository: Repository<Patient>
    ) {
        super(patientRepository); 
    }
} 