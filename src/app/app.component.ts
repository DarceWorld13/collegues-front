import { Component } from '@angular/core';
import { DataService } from './services/data.service';



@Component({
  selector: 'app-root',
  template: `
<header>
<h1 style="text-align:center; height:90px; background-color:black; color:green">Administration Collègues</h1>
</header>
<nav>
<a routerLink="/accueil">Accueil</a>
<a routerLink="/gallerie">Gallerie</a>
<a routerLink="/apropos"> A propos</a>
</nav>
<main>
<router-outlet></router-outlet>
</main>

<footer> ici mon footer</footer>

    `
})export class AppComponent {
 
  ngOnInit() {
   
  }


}

