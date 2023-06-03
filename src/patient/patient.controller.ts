import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientCreateDto } from './models/pateint-create.dto';
import { PatientUpdateDto } from './models/patient-update.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('patients')
export class PatientController {
    constructor(
        private patientService: PatientService
    ) {}

    @Get()
    async all(@Query('page') page = 1) {
        return this.patientService.paginate(page);
    }

    @Post()
    async create(
        @Body() body: PatientCreateDto
    ) {
        return this.patientService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.patientService.findOne({where: {id}});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: PatientUpdateDto
    ) {
        await this.patientService.update(id, body);
        return this.patientService.findOne({where: {id}});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.patientService.delete(id);
    }
}
