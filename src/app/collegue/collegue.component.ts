import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

constructor(private srv:DataService){

}

col:Collegue = new Collegue('','','','',undefined,'');



showed=false;

  ngOnInit() {

    this.srv.prendreAbonnement().subscribe((el)=>this.col =el); 
  }


  show(){
    this.showed =true;
     }

  


}

