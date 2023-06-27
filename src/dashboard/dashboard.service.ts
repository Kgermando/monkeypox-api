import { Injectable } from '@nestjs/common'; 
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class DashboardService {

    constructor(
        @InjectDataSource() private dataSource: DataSource,
    ) {}

    async patientCount () {
       return this.dataSource.query("SELECT COUNT(*) FROM patient;");
    }

    async suspectCount () {
       return this.dataSource.query("SELECT COUNT(*) FROM epidemie WHERE statut='Cas suspect';");
    }

    async suspectCountPourcent () {
        return this.dataSource.query(`
        WITH resultat AS (SELECT COUNT(id) AS total FROM epidemie) 
        SELECT statut, COUNT(statut)*100/total AS pourcentage FROM resultat, 
        epidemie WHERE statut='Cas suspect' GROUP BY total, statut;
    `);
    }

    async decesCount () {
       return this.dataSource.query("SELECT COUNT(*) FROM epidemie WHERE statut='Décès';");
    }

    async decesCountPourcent () {
        return this.dataSource.query(`
        WITH resultat AS (SELECT COUNT(id) AS total FROM epidemie) 
        SELECT statut, COUNT(statut)*100/total AS pourcentage FROM resultat, 
        epidemie WHERE statut='Décès' GROUP BY total, statut;
    `);
    }

    async trancheAge () {
        return this.dataSource.query("SELECT fourchette_age, COUNT(fourchette_age) FROM patient GROUP BY fourchette_age;");
    }

    async statsRecordFiche () {
        return this.dataSource.query("SELECT COUNT(*) FROM epidemie;");
    }
    async statsRecordUser () {
        return this.dataSource.query("SELECT COUNT(*) FROM user;");
    }

    async nbrPatientSexe () {
        return this.dataSource.query(`
            WITH resultat AS (SELECT COUNT(id) AS total FROM patient) 
            SELECT sexe, COUNT(sexe)*100/total AS pourcentage FROM resultat, 
            patient GROUP BY total, sexe;
        `);
    }

    async eteContactPatient () {
        return this.dataSource.query(`
            WITH resultat AS (SELECT COUNT(id) AS total FROM epidemie) 
            SELECT a_ete_contact_patient, COUNT(a_ete_contact_patient)*100/total AS pourcentage FROM resultat, 
            epidemie GROUP BY total, a_ete_contact_patient;
        `);
    }

    async eteHospitalise () {
        return this.dataSource.query(`
            WITH resultat AS (SELECT COUNT(id) AS total FROM epidemie) 
            SELECT a_ete_hospitalise, COUNT(a_ete_hospitalise)*100/total AS pourcentage FROM resultat, 
            epidemie GROUP BY total, a_ete_hospitalise;
        `);
    }

    async typeContact () {
        return this.dataSource.query(`
            WITH resultat AS (SELECT COUNT(id) AS total FROM epidemie) 
            SELECT type_contact, COUNT(type_contact)*100/total AS pourcentage FROM resultat, 
            epidemie GROUP BY total, type_contact; 
        `);
    }

    async fievre () {
        return this.dataSource.query(`
            WITH resultat AS (SELECT COUNT(id) AS total FROM epidemie) 
            SELECT fievre, COUNT(fievre)*100/total AS pourcentage FROM resultat, 
            epidemie GROUP BY total, fievre;
        `);
    }

    async eruptionCutanee () {
        return this.dataSource.query(`
            WITH resultat AS (SELECT COUNT(id) AS total FROM epidemie) 
            SELECT eruption_cutanee, COUNT(eruption_cutanee)*100/total AS pourcentage FROM resultat, 
            epidemie GROUP BY total, eruption_cutanee;
        `);
    } 
 

    async decesProvince () {
        return this.dataSource.query(`
            SELECT province, COUNT(province) 
            FROM epidemie WHERE statut='Décès'  GROUP BY province;
        `);
    }

    async decesAnnee () {
        return this.dataSource.query("SELECT * FROM epidemie;");
     }

    async statutEpidemiologique () {
        return this.dataSource.query("SELECT * FROM epidemie;");
    }

    async evolutionCas () {
        return this.dataSource.query("SELECT * FROM epidemie;");
    }


 
 
}
 