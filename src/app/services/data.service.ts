import { Injectable } from '@angular/core';
import { matricules } from '../mock/matricules.mock';
import { mcgregor } from '../mock/collegues.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  recupererCollegueCourant() {
    return mcgregor;
  }
 
  rechercherParNom(nom: string): string[]  {  
    return matricules; 
  }


}
