import { Injectable } from '@angular/core';
import { matricules } from '../mock/matricules.mock';
import { mcgregor } from '../mock/collegues.mock';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ModelData } from '../model-data';
import { environment } from '../../environments/environment';
import { Collegue } from '../models/Collegue';
import { ModifCollegue } from '../models/modifCollegue';
import { SauvegarderCollegue } from '../models/SauvegarderCollegue';

@Injectable({
  providedIn: 'root'
})
export class DataService {


//création d'un sujet
  private subject = new Subject<Collegue>();


  lenom ='?nom='; 
  url_back =environment.urlPosts; 

  constructor(private _http:HttpClient) { }

  //cette méthode me permet de récupérer un tableau de matricule en saisissant un Nom
  rechercherParNom(nom:string):Observable<string[]>  { 
     return this._http.get<string[]>(`${this.url_back}${this.lenom}${nom}`);
  }

  //cette méthode me permet de récupérer un collegue en saisissant son matricule
  recupererCollegueCourant(matricule:string):Observable<Collegue> {
    return this._http.get<Collegue>(`${this.url_back}${matricule}`).pipe(tap((collegue)=>this.subject.next(collegue)))
  }
  


  modifierEmail(matricule:string, email:string){
    return this._http.patch<Collegue>(`${this.url_back}${matricule}`,{"email":email}); 
  }

  modifierPhotoUrl(matricule:string,photoUrl:string){
    return this._http.patch<Collegue>(`${this.url_back}${matricule}`,{"photoUrl":photoUrl}); 
  }

  //celui qui s'abonne de récupérer un collègue pour pouvoir l'afficher chez lui
  prendreAbonnement():Observable<Collegue>{
    return this.subject.asObservable(); 
  }

  sauvegarderUnCollegue(monsieur:SauvegarderCollegue){
    return this._http.post<Collegue>(`${this.url_back}`,monsieur);
  }

}
