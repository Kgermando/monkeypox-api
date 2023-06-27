import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {

    constructor(private dashboardService: DashboardService) {}


    @Get('patient-count')
    async patientCount() {
        return this.dashboardService.patientCount();
    }

    @Get('suspect-count')
    async suspectCount() {
        return this.dashboardService.suspectCount();
    }

    @Get('suspect-count-pourcent')
    async suspectCountPourcent() {
        return this.dashboardService.suspectCountPourcent();
    }

    @Get('deces-count')
    async decesCount() {
        return this.dashboardService.decesCount();
    } 

    @Get('deces-count-pourcent')
    async decesCountPourcent() {
        return this.dashboardService.decesCountPourcent();
    }

    @Get('tranche-age')
    async trancheAge() {
        return this.dashboardService.trancheAge();
    } 

 
    @Get('stats-record-fiche')
    async statsRecordFiche() {
        return this.dashboardService.statsRecordFiche();
    }

    @Get('stats-record-user')
    async statsRecordUser() {
        return this.dashboardService.statsRecordUser();
    }

    @Get('nbre-patient-sexe')
    async nbrPatientSexe() {
        return this.dashboardService.nbrPatientSexe();
    }

    @Get('a-ete-contact-patient')
    async eteContactPatient() {
        return this.dashboardService.eteContactPatient();
    }

    @Get('a-ete-hospitalise')
    async eteHospitalise() {
        return this.dashboardService.eteHospitalise();
    }

    @Get('type-contact')
    async typeContact() {
        return this.dashboardService.typeContact();
    }

    @Get('fievre')
    async fievre() {
        return this.dashboardService.fievre();
    }

    @Get('eruption-cutanee')
    async eruptionCutanee() {
        return this.dashboardService.eruptionCutanee();
    }


    @Get('deces-province')
    async decesProvince() {
        return this.dashboardService.decesProvince();
    }

    @Get('statut-epidemiologique')
    async statutEpidemiologique() {
        return this.dashboardService.statutEpidemiologique();
    }
 

    @Get('deces-annee')
    async decesAnnee() {
        return this.dashboardService.decesAnnee();
    } 

    @Get('evolution-cas')
    async evolutionCas() {
        return this.dashboardService.evolutionCas();
    }

}
