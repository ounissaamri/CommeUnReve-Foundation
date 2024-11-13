import { HeaderComponent } from './layout/components/header/header.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent} from './layout/components/footer/footer.component';
import {QuiSommeNousComponent} from './pages/qui-somme-nous/qui-somme-nous.component';
import { NosactionsComponent } from './pages/nosactions/nosactions.component';
import { AgirAvecNousComponent } from './pages/agir-avec-nous/agir-avec-nous.component';
import {ArticleBlogComponent} from './pages/article-blog/article-blog.component';
import { DonationComponent } from './pages/donation/donation.component';
import { BenevoleComponent } from './pages/benevole/benevole.component';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
     QuiSommeNousComponent,
     FooterComponent,
     NosactionsComponent,
     AgirAvecNousComponent,
     ArticleBlogComponent,
     DonationComponent,
     BenevoleComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CommeUnReve-Back-';
  constructor(){
    console.log(environment)

  }

}
