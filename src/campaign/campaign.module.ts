import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import { Campaign } from './models/campaign.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Campaign]),
    CommonModule, 
  ],
  controllers: [CampaignController],
  providers: [CampaignService]
})
export class CampaignModule {}
