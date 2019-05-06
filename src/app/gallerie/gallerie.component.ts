import { Component, OnInit } from '@angular/core';
import { infoCollegue } from '../models/infoCollegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  constructor(private srv: DataService) { }


  listeObjet:infoCollegue[];

  ngOnInit() {
      this.srv.afficherInfo().subscribe(tab=>this.listeObjet = tab); 
  }




}
