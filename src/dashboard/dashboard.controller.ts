import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {

    constructor(private dashboardService: DashboardService) {}


    @Get('province')
    async all() {
        return this.dashboardService.province();
    }

    @Get('trancheage')
    async trancheAge() {
        return this.dashboardService.trancheAge();
    }
}
