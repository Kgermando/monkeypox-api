import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StructureController } from './structure.controller';
import { StructureService } from './structure.service';
import { CommonModule } from 'src/common/common.module';
import { Structure } from './models/structure.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Structure]),
    CommonModule, 
  ],
  controllers: [StructureController],
  providers: [StructureService]
})
export class StructureModule {}
