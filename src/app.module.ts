import { Module } from '@nestjs/common'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { CommonModule } from './common/common.module';  
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration'; 
import { UploadfileModule } from './uploadfile/uploadfile.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PatientModule } from './patient/patient.module';
import { EpidemieModule } from './epidemie/epidemie.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CampaignModule } from './campaign/campaign.module';
import { ZoneSanteModule } from './zone-sante/zone-sante.module';
import { StructureModule } from './structure/structure.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      expandVariables: true,
    }),

    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.user'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.db'), 
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    CommonModule,
    UploadfileModule,
    AuthModule,
    UserModule,
    PatientModule,
    EpidemieModule,
    DashboardModule,
    CampaignModule,
    ZoneSanteModule,
    StructureModule,
    
  ], 
})
export class AppModule {}
