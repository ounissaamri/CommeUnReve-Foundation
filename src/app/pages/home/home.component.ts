import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
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
  

}
