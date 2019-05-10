import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environmentAuth, environmentLogOut } from '../../environments/environment';
import { UserCollegue } from '../models/UserCollegue';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private subject = new Subject<UserCollegue>(); 
  constructor(private _http:HttpClient) { } 

  url_back =environmentAuth.urlPosts;

  urlLogOut =environmentLogOut.urlPosts; 

  connected = false; 

  //lorsqu'on fournit dans le corps de la requête l'email et le mot de passe, nous sommes censé pouvoir nous connecter: un cookie devrait être stoké dans notre navigateur
  seConnecter(email:string, motDePasse:string){
    return this._http.post<UserCollegue>(`${this.url_back}`, {"email":email, "motDePasse":motDePasse},{"withCredentials": true})
    .pipe(
      tap(col => {
        this.connected = true;
      })
    )
  }

isLoggedIn(){

  return this.connected; 
}
  
seDeconnecter(){
return this._http.request('POST',`${this.urlLogOut}`, {"withCredentials": true} ); 

}




  
}
