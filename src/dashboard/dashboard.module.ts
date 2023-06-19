import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { ServiceService } from './service/service.service';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService, ServiceService]
})
export class DashboardModule {}
