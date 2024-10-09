import { HeaderComponent } from './shared/components/header/header.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { HeaderComponent } from "./header/header.component";
import { BlogComponent } from './blog/blog.component';
import { FooterComponent} from './footer/footer.component';
import { MissionsComponent } from './missions/missions.component';
import {HerosectionComponent} from './herosection/herosection.component';
import {DonationComponent } from './donation/donation.component';
import {QuiSommeNousComponent} from './qui-somme-nous/qui-somme-nous.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
     BlogComponent,
     FooterComponent,
     MissionsComponent,
     HerosectionComponent,
     DonationComponent,
     QuiSommeNousComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CommeUnReve-Back-';
}
