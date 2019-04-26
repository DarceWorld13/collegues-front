import { Component } from '@angular/core';
import { mcgregor } from './mock/collegues.mock';


@Component({
  selector: 'app-root',
  template: `

<app-collegue [col]="unObjetCollegueFourni"></app-collegue>
    `
})export class AppComponent {
  unObjetCollegueFourni= mcgregor;
}

