import { Component } from '@angular/core';
import { mcgregor } from './mock/collegues.mock';



@Component({
  selector: 'app-root',
  template: `

<div class="row">
  <div class="col">
  <app-rechercher-par-nom> </app-rechercher-par-nom> </div>
  <div class="col"><app-collegue [col]="unObjetCollegueFourni"></app-collegue></div>
</div>
   
    `
})export class AppComponent {
  unObjetCollegueFourni= mcgregor;


}

