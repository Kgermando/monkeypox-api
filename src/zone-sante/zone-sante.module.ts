import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZoneSanteController } from './zone-sante.controller';
import { ZoneSanteService } from './zone-sante.service';
import { CommonModule } from 'src/common/common.module';
import { ZoneSante } from './models/zone-sante.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ZoneSante]),
    CommonModule, 
  ],
  controllers: [ZoneSanteController],
  providers: [ZoneSanteService]
})
export class ZoneSanteModule {}
