import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CampaignCreateDto } from './models/campaign-create.dto';
import { CampaignUpdateDto } from './models/campaign-update.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('campaigns')
export class CampaignController {
    constructor(
        private campaignService: CampaignService
    ) {}

    @Get()
    async all(@Query('page') page = 1) {
        return this.campaignService.paginate(page);
    }

    @Post()
    async create(
        @Body() body: CampaignCreateDto
    ) {
        return this.campaignService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.campaignService.findOne({where: {id}});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: CampaignUpdateDto
    ) {
        await this.campaignService.update(id, body);
        return this.campaignService.findOne({where: {id}});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.campaignService.delete(id);
    }
}
