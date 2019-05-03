import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercherParNomComponent } from './rechercher-par-nom/rechercher-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercherParNomComponent

  ],
  imports: [
    BrowserModule, 
    NgbModule, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
