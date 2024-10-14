import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BlogComponent } from '../../shared/components/blog/blog.component';
import { DonationComponent } from '../../shared/components/donation/donation.component';
import { HerosectionComponent } from '../../shared/components/herosection/herosection.component';
import { MissionsComponent } from '../../shared/components/missions/missions.component';
import { ArticleBlogComponent } from '../article-blog/article-blog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UpperCasePipe,
    BlogComponent,
     MissionsComponent,
     HerosectionComponent,
     DonationComponent,
     
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
   titre='Je fait un don '
   text='fait un donfait un donfait un donfait un donfait un donfait un don'
   button='Faire un don'
   titreImage='Comme un rêve' 
   descriptionImage='Le coeur de notre mission'
}
