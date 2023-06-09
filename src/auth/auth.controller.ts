import { BadRequestException, Body, ClassSerializerInterceptor, Controller, Get, NotFoundException, Param, Post, Put, Req, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './models/register.dto';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express'; 
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { UserUpdateDto } from 'src/user/models/user-update.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {

    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private authService: AuthService,
        ) { }

    @Post('register')
    async register(@Body() body: RegisterDto) {
        if(body.password !== body.password_confirm) {
            throw new BadRequestException("Mot de passe de correspond pas.");
        }
        const hashed = await bcrypt.hash(body.password, 12);
        return this.userService.create({
            structure: body.structure,
            photo: body.photo,
            nom: body.nom,
            postnom: body.postnom,
            prenom: body.prenom,
            sexe: body.sexe,
            nationalite: body.nationalite,
            etat_civile: body.etat_civile,
            adresse: body.adresse,
            titre: body.titre,
            pays: body.pays,
            province: body.province,
            zone_sante: body.zone_sante,
            email: body.email,
            telephone: body.telephone, 
            matricule: body.matricule,
            role: body.role,
            password: hashed,
            signature: body.signature,
            created: body.created,
            update_created: body.update_created,
        });
    }

    @Post('login')
    async login(
        @Body('matricule') matricule: string,
        @Body('password') password: string,
        // @Res({passthrough: true}) response: Response
    ) {
        const user = await this.userService.findOne({where: {matricule}}); 

        if(!user) {
            throw new NotFoundException('Utilisateur non trouvé!');
        } 

        if(!await bcrypt.compare(password, user.password)) {
            throw new BadRequestException('Invalid credentiels.');
        }

        if(user.statut_personnel == false) {
            throw new BadRequestException("Ce compte n'est pas actif! ");
        } 

        const jwt = await this.jwtService.signAsync({id: user.id});
        
        // response.cookie('jwt', jwt, {httpOnly: true});

        // const token = {"token": jwt};

        const userId = user.id;

        return userId;
    }


    @Get(':id')
    async user(@Param('id') id: number) {
        // const id = await this.authService.userId(jwt);
        return this.userService.findOne({where: {id}});
    }
 

    // @UseGuards(AuthGuard)
    // @Get('user')
    // async user(@Req() request: Request) {
    //     const id = await this.authService.userId(request);
    //     return this.userService.findOne({where: {id}});
    // }

    @UseGuards(AuthGuard)
    @Post('logout')
    async logout(
        // @Res() response: Response 
    ) {
        // response.clearCookie('jwt');

        return {
            message: 'Success!'
        }
    }


    // Modifier les information uniquement
    @Put('/info/:id')
    async updateInfo(
      @Param('id') id: number,
      @Body() body: UserUpdateDto ) {
      // const id = await this.authService.userId(jwt);
  
      await this.userService.update(id, body); 
      
      return this.userService.findOne({where: {id}});
    }
  


    @Put('/password/:id')  
    async updatePassword(
      @Param('id') id: number,
      @Body('password') password: string,
      @Body('password_confirm') password_confirm: string,
    ) {
      if(password !== password_confirm) {
        throw new BadRequestException("Mot de passe de correspond pas.");
    }
      // const id = await this.authService.userId(jwt);
  
      const hashed = await bcrypt.hash(password, 12);
  
      await this.userService.update(id, {
        password: hashed
      }); 
      
      return this.userService.findOne({where: {id}});
    }
  
 
}
