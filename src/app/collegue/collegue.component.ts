import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { ModifCollegue } from '../models/modifCollegue';
import { SauvegarderCollegue } from '../models/SauvegarderCollegue';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

constructor(private srv:DataService){

}

col:Collegue = new Collegue('','','','',undefined,'');

modif = new ModifCollegue('',''); 


nouveauCollegue = new SauvegarderCollegue( '','','',undefined,''); 
message=''; 
cacherMessageAlert=true;

showed=false;
hidden =true; 

  ngOnInit() {

    this.srv.prendreAbonnement().subscribe((el)=>this.col =el); 
  }

  tohide(){
  this.hidden = false; 
}
  show(){
    this.showed =true;
     }

  valider(){
    this.srv.modifierEmail(this.col.matricule,this.modif.email).subscribe(col=>{}, err=>this.cacherMessageAlert=false, () =>{
      console.log("c'est terminé")

    }
    );
   this.srv.modifierPhotoUrl(this.col.matricule,this.modif.photoUrl).subscribe(col=>{},err=>this.cacherMessageAlert=false, () =>{
    console.log("c'est terminé")

  }); 

  }

  creer(){
    this.srv.sauvegarderUnCollegue(this.nouveauCollegue).subscribe(col=>{},err=>this.cacherMessageAlert=false, () =>{
      console.log("c'est terminé")
  
    });
  }


  supprimierMessageErreur(){
    this.cacherMessageAlert = true; 
  }

  ServerError(){
    this.message ='serveur inaccessible'
  }
  


}

