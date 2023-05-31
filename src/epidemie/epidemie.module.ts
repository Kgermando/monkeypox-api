import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpidemieController } from './epidemie.controller';
import { EpidemieService } from './epidemie.service';
import { CommonModule } from 'src/common/common.module';
import { Epidemie } from './moidels/epidemie.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Epidemie]),
    CommonModule, 
  ],
  controllers: [EpidemieController],
  providers: [EpidemieService]
})
export class EpidemieModule {}
