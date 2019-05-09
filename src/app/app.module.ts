import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercherParNomComponent } from './rechercher-par-nom/rechercher-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { RouterModule, Routes } from '@angular/router';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AproposComponent } from './apropos/apropos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PasTrouveComponentComponent } from './pas-trouve-component/pas-trouve-component.component';
import { InfoCollegueComponent } from './info-collegue/info-collegue.component';

const appRoutes:Routes=[
  {path:"accueil", component :AccueilComponent}, 
  {path:"gallerie", component:GallerieComponent}, 
  {path:"apropos", component: AproposComponent},
  { path: 'gallerie/:matricule', component: InfoCollegueComponent }, 
  {path:"", pathMatch:"full", redirectTo:"accueil"},
  {path:"**", component: PasTrouveComponentComponent},
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercherParNomComponent,
    EmailValidatorDirective,
    GallerieComponent,
    AproposComponent,
    AccueilComponent,
    PasTrouveComponentComponent,
    InfoCollegueComponent

  ],
  imports: [
    BrowserModule, 
    NgbModule, 
    HttpClientModule, 
    FormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
