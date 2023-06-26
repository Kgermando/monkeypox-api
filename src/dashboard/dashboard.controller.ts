import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {

    constructor(private dashboardService: DashboardService) {}


    @Get('patient-count')
    async patientCount() {
        return this.dashboardService.patientCount();
    }

    @Get('suspect-count')
    async suspectCount() {
        return this.dashboardService.suspectCount();
    }

    @Get('deces-count')
    async decesCount() {
        return this.dashboardService.decesCount();
    }


    @Get('tranche-age')
    async trancheAge() {
        return this.dashboardService.trancheAge();
    }



    @Get('province')
    async all() {
        return this.dashboardService.province();
    }

}
