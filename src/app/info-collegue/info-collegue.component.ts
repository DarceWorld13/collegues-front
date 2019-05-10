import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-info-collegue',
  templateUrl: './info-collegue.component.html',
  styleUrls: ['./info-collegue.component.css']
})
export class InfoCollegueComponent implements OnInit {

  constructor(private srv: DataService, private route: ActivatedRoute) { }
  matricule: string;
  col:Collegue;
  saisie = ''; 
   
  ngOnInit() { 

    this.matricule = this.route.snapshot.paramMap.get("matricule"); 
    this.srv.recupererCollegueCourant(this.matricule).subscribe(col22=>this.col = col22); 
}

commenter(){
  this.saisie; 
}



  }
