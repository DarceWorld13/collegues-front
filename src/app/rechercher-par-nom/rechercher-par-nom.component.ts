import { Component, OnInit, Input} from '@angular/core';
import { matricule } from '../mock/matricules.mock';

@Component({
  selector: 'app-rechercher-par-nom',
  templateUrl: './rechercher-par-nom.component.html',
  styleUrls: ['./rechercher-par-nom.component.css']
})
export class RechercherParNomComponent implements OnInit {

  constructor() { }

  mat = matricule; 

  montrerVar = false;

  ngOnInit() {
  }

 /* afficherMatricule(){

  return this.mat; 
  }

  montrer(){
    this.montrerVar = true;
  }*/

  affichertout(){
    this.montrerVar = true;
    return this.mat; 
  }


}
