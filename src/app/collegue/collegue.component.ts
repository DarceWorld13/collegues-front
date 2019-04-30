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

@Input()col:Collegue;

showed=false;

  ngOnInit() {
  }

 show(){
this.showed =true;
 }
  

}

