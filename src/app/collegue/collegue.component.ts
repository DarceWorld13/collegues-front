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

  constructor(private srv: DataService) {

  }
  col: Collegue = new Collegue('', '', '', '', undefined, '');
  modif = new ModifCollegue('', '');
  nouveauCollegue = new SauvegarderCollegue('', '', '', undefined, '');
  message = '';
  cacherMessageAlert = true;
  showed = false;
  hidden = true; 
  email = '';
  //au démarre il peut avoir accès à un collègue qu'il peut aficher chez lui, via la méthode prendreAbonnement définie dans dataService
  ngOnInit() {
    this.srv.prendreAbonnement().subscribe((el) => this.col = el);
  }

  //lorsque cette méthode est invoqué, les élements sont cachés. oui ça fait bizarre de mettre hidden ==false et que le resultat soit l'opposé lol : bye bye la logique
  tohide() {
    this.hidden = false;
    
  }

  //on ne montre les élements dans le html  *ngIf="showed==true" que seulement lorsque cette méthode est invoqué, sinon ils restent cachés
  show() {
    this.showed = true;
  }

  //lorsqu'on modifie un email ou une photo
  valider() {
    this.srv.modifierEmail(this.col.matricule, this.modif.email).subscribe(col => { }, err => this.cacherMessageAlert = false, () => {
      alert('Votre modification a été prise en compte ! ')
    }
    );

    this.srv.modifierPhotoUrl(this.col.matricule, this.modif.photoUrl).subscribe(col => { }, err => this.cacherMessageAlert = false, () => {
      alert('Votre modification a été prise en compte ! ')
    });

  }
  //lorsqu'on créer un nouveau collegue
  creer() {
    this.srv.sauvegarderUnCollegue(this.nouveauCollegue).subscribe(col => { }, err => this.cacherMessageAlert = false, () => {
      alert('Le collegue a bien été sauvegarder !')
    });
  }
  //le message d'erreur qui s'affiche lorsqu'il y a un problème d'accès au serveur
  supprimierMessageErreur() {
    this.cacherMessageAlert = true;
  }
  //le contenu du message que contiendra le message 
  ServerError() {
    this.message = 'serveur inaccessible'
  }

  //pas encore utilisé, car il me faut revoir le tp optionnel sur le validator
  verifEmail() {
    this.srv.emailExists(this.email);  
  }




}

