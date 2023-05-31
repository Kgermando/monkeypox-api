import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { Campaign } from './models/campaign.entity';

@Injectable()
export class CampaignService extends AbstractService {
    constructor(
        @InjectRepository(Campaign) private readonly campaignRepository: Repository<Campaign>
    ) {
        super(campaignRepository); 
    }
}
