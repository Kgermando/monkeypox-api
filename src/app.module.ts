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


const isProduction = process.env.NODE_ENV === "production";

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
        url: configService.get<string>('database.url'),
        ssl: isProduction ? {
          rejectUnauthorized: false,
        } : null,
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
