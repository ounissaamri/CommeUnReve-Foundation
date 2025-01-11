import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { AgirAvecNousComponent } from './pages/agir-avec-nous/agir-avec-nous.component';
import { ArticleBlogComponent } from './pages/article-blog/article-blog.component';
import { BenevoleComponent } from './pages/benevole/benevole.component';
import { DonationComponent } from './pages/donation/donation.component';
import { HomeComponent } from './pages/home/home.component';
import { NosactionsComponent } from './pages/nosactions/nosactions.component';
import { QuiSommeNousComponent } from './pages/qui-somme-nous/qui-somme-nous.component';
import { AnalyticsService } from './shared/services/analytics.service';

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
    BenevoleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit() {}
  constructor(private analyticsService: AnalyticsService) {
    console.log(
      ''
    );
  }
}
