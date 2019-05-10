import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { UserServiceService } from './services/user-service.service';



@Component({
  selector: 'app-root',
  template: `
<header style="margin:0">
<h1 style="text-align:center; height:90px; background-color:black; color:green; ">Administration Collègues</h1>
<div>
<button type="button" routerLink="/connect" class="btn btn-success">Se Connecter</button>
<button type="button"(click)="disconnect()" class="btn btn-success">disconnect</button>
</div>
</header>
<nav style="display: flex; flex-direction:row; justify-content:space-around; flex-wrap:nowrap; background-color:silver; margin:10px; height:50px; ">
<a routerLink="/accueil">Accueil</a>
<a routerLink="/gallerie">Gallerie</a>
<a routerLink="/apropos"> A propos</a>
</nav>
<main>
<router-outlet></router-outlet>
</main>
<footer class="page-footer font-small teal pt-4 bg-dark">
  <div class="container-fluid text-center text-md-left text-success">
    <div class="row">
      <div class="col-md-6 mt-md-0 mt-3">
        <h5 class="text-uppercase font-weight-bold">Footer text 1</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil
          repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
          harum esse fugiat. Itaque, culpa?</p>
      </div>
      <hr class="clearfix w-100 d-md-none pb-3">
      <div class="col-md-6 mb-md-0 mb-3">
        <h5 class="text-uppercase font-weight-bold">Footer text 2</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum
          commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id
          excepturi hic.</p>
      </div>
    </div>
  </div>
  <div class="footer-copyright text-center py-3 text-success">© 2018 Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
  </div>
</footer>



    `
})export class AppComponent {

  constructor(private userService: UserServiceService){

  }
 
  ngOnInit() {
   
  }

  disconnect(){
    this.userService.seDeconnecter().subscribe(); 
  }


}

