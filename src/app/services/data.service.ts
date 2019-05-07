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
import { infoCollegue } from '../models/infoCollegue';

@Injectable({
  providedIn: 'root'
})
export class DataService {


//création d'un sujet
  private subject = new Subject<Collegue>();


  lenom ='?nom='; 
  url_back =environment.urlPosts; 
  emailverif="verif?email="; 
  photos = "photos"; 
  matricule= "/:matricule";  

  constructor(private _http:HttpClient) { }

  //cette méthode me permet de récupérer un tableau de matricule en saisissant un Nom
  rechercherParNom(nom:string):Observable<string[]>  { 
     return this._http.get<string[]>(`${this.url_back}${this.lenom}${nom}`);
  }

  //cette méthode me permet de récupérer un collegue en saisissant son matricule
  recupererCollegueCourant(matricule:string):Observable<Collegue> {
    return this._http.get<Collegue>(`${this.url_back}${matricule}`).pipe(tap((collegue)=>this.subject.next(collegue)))
  }
  //cette méthode me permet de modifier l'email d'un collegue en fournissant dans le corps de la requête un email: dans le champ input en l'occurrence
  modifierEmail(matricule:string, email:string){
    return this._http.patch<Collegue>(`${this.url_back}${matricule}`,{"email":email}); 
  }
 //cette méthode me permet de modifier l'email d'un collegue en fournissant dans le corps de la requête une photoUrl: dans le champ input en l'occurrence
  modifierPhotoUrl(matricule:string,photoUrl:string){
    return this._http.patch<Collegue>(`${this.url_back}${matricule}`,{"photoUrl":photoUrl}); 
  }

  //celui qui s'abonne peut récupérer un collègue pour pouvoir l'afficher chez lui
  prendreAbonnement():Observable<Collegue>{
    return this.subject.asObservable(); 
  }
//cette méthode me permet de sauvegarder un nouveau collegue en lui fournissant dans le corps de la requête un individu "monsieur"
  sauvegarderUnCollegue(monsieur:SauvegarderCollegue){
    return this._http.post<Collegue>(`${this.url_back}`,monsieur);
  }
//pas terminé cette verif de l'email, 
emailExists(email:string){
  return this._http.get<Collegue>(`${this.url_back}${this.emailverif}${email}`)

}

//cette méthode me permet de réccupérer les infos d'un collegues sous l'url /collegues/gallerie permettant d'afficher les photos de collegues en les associant avec le matricule; 
afficherInfo() : Observable<infoCollegue[]>{
  return this._http.get<infoCollegue[]>(`${this.url_back}${this.photos}`)
}











}
