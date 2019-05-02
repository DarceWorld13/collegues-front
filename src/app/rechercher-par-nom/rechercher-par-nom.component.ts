import { Component, OnInit, Input} from '@angular/core';
import { DataService } from '../services/data.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ModelData } from '../model-data';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-rechercher-par-nom',
  templateUrl: './rechercher-par-nom.component.html',
  styleUrls: ['./rechercher-par-nom.component.css']
})
export class RechercherParNomComponent implements OnInit {

  listeMatricules: string[];
  colleguesCourant:Collegue; 
  message ='';
 
  constructor( private _srv:DataService) { }

  ngOnInit() {
  }

  findByNom(nomSaisi:string){
   this._srv.rechercherParNom(nomSaisi).subscribe(tab =>this.listeMatricules=tab); 
  }
 
clickSurMatricule(matriculeSaisi:string){
this._srv.recupererCollegueCourant(matriculeSaisi).subscribe(col =>{
}),
erreur =>{this.message = "impossible de trouver ce collègue"}, 
()=>{}
}



}
