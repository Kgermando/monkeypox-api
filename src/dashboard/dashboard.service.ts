import { Injectable } from '@nestjs/common'; 
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class DashboardService {
    
    constructor(
        @InjectDataSource() private dataSource: DataSource,
    ) {}
       
    async patientCount () {
       return this.dataSource.query("SELECT COUNT(*) FROM patient;");
    }

    async suspectCount () {
       return this.dataSource.query("SELECT COUNT(*) FROM epidemie WHERE 'statut'='Cas suspect';");
    }

    async decesCount () {
       return this.dataSource.query("SELECT COUNT(*) FROM epidemie WHERE 'statut'='Décès';");
    }

    async trancheAge () {
        return this.dataSource.query("SELECT fourchette_age, COUNT(fourchette_age) FROM patient GROUP BY fourchette_age;");
    }

    async province () {
       return this.dataSource.query("SELECT * FROM user;");
    }

 
}
 