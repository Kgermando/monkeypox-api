import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { EpidemieService } from './epidemie.service';
import { EpidemieCreateDto } from './moidels/epidemie-create.dto';
import { EpidemieUpdateDto } from './moidels/epidemie-update.dto';
import { AuthGuard } from 'src/auth/auth.guard';

// @UseGuards(AuthGuard)
@Controller('epidemies')
export class EpidemieController {
    constructor(
        private epidemieService: EpidemieService
    ) {}

    @Get()
    async all() {
        return this.epidemieService.all();
    }
    // async all(@Query('page') page = 1) {
    //     return this.epidemieService.paginate(page);
    // }

    @Post()
    async create(
        @Body() body: EpidemieCreateDto
    ) {
        return this.epidemieService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.epidemieService.findOne({where: {id}});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: EpidemieUpdateDto
    ) {
        await this.epidemieService.update(id, body);
        return this.epidemieService.findOne({where: {id}});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.epidemieService.delete(id);
    }
}
