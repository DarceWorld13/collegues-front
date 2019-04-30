import { Component } from '@angular/core';
import { DataService } from './services/data.service';



@Component({
  selector: 'app-root',
  template: `

<h1 style="text-align:center; height:90px; background-color:black; color:green">Administration Collègues</h1>
<div class="row">
  <div class="col">
  <app-rechercher-par-nom> </app-rechercher-par-nom> </div>
  <div class="col"><app-collegue [col]="unObjetCollegueFourni"></app-collegue></div>
</div>
   
    `
})export class AppComponent {
  unObjetCollegueFourni;

  constructor(private dataservice:DataService ) {
    
  }

  ngOnInit() {
    this.unObjetCollegueFourni = this.dataservice.recupererCollegueCourant();
    // qui s'exécute à l'initialisation du composant
  }


}

