import { Component, OnInit } from '@angular/core';
import { UserCollegue } from '../models/UserCollegue';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {


col:UserCollegue = new UserCollegue('',''); 

messageAlert=true; 
message=''; 


  constructor(private srvice:UserServiceService, private router:Router) { }

  ngOnInit() {
  }

  valider(){
    this.srvice.seConnecter(this.col.email, this.col.motDePasse).subscribe(col => {this.router.navigate(['/accueil'])},erreur=>{
      this.router.navigate(['/connect']); this.messageAlert=false
    
    })

  }

  fermer(){
    this.messageAlert=true; 
  }







}
