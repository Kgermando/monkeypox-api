import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { StructureService } from './structure.service';
import { StructureCreateDto } from './models/structure-create.dto';
import { StructureUpdateDto } from './models/structure-update.dto';
import { AuthGuard } from 'src/auth/auth.guard';

// @UseGuards(AuthGuard)
@Controller('structures')
export class StructureController {
    constructor(
        private structureService: StructureService
    ) {}

    @Get()
    async all() {
        return this.structureService.all();
    }
    // async all(@Query('page') page = 1) {
    //     return this.structureService.paginate(page);
    // }

    @Post()
    async create(
        @Body() body: StructureCreateDto
    ) {
        return this.structureService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.structureService.findOne({where: {id}});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: StructureUpdateDto
    ) {
        await this.structureService.update(id, body);
        return this.structureService.findOne({where: {id}});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.structureService.delete(id);
    }
}
