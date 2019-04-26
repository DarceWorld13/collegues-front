import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { mcgregor } from '../mock/collegues.mock';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

constructor(){

}

@Input() col:Collegue;

  ngOnInit() {
  }


  modifierCollegue(){
    console.log("en cours de modification ! ")
  }
  creerUnCollegue(){
    console.log("un collegue a été crée")
  }

}

