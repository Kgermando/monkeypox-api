import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ZoneSanteService } from './zone-sante.service';
import { ZoneSanteCreateDto } from './models/zone-sante-create.dto';
import { ZoneSanteUpdateDto } from './models/zone-sante-update.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('zone-santes')
export class ZoneSanteController {
    constructor(
        private zoneSanteService: ZoneSanteService
    ) {}

    @Get()
    async all(@Query('page') page = 1) {
        return this.zoneSanteService.paginate(page);
    }

    @Post()
    async create(
        @Body() body: ZoneSanteCreateDto
    ) {
        return this.zoneSanteService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.zoneSanteService.findOne({where: {id}});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: ZoneSanteUpdateDto
    ) {
        await this.zoneSanteService.update(id, body);
        return this.zoneSanteService.findOne({where: {id}});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.zoneSanteService.delete(id);
    }
}
