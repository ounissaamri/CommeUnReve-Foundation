import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { BlogComponent } from '../../blog/blog.component';
import { DonationComponent } from '../../donation/donation.component';
import { HerosectionComponent } from '../../herosection/herosection.component';
import { MissionsComponent } from '../../missions/missions.component';

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
