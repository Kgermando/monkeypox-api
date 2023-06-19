import { Injectable } from '@nestjs/common'; 
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class DashboardService {
    constructor(
        @InjectDataSource() private dataSource: DataSource,
    ) {}
       
    async province () {
        this.dataSource.query('SELECT * FROM users;');
    }

    async trancheAge () {
        this.dataSource.query('SELECT * FROM patients;');
    }
}
