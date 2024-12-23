import { BlogService } from './../../shared/services/blog.service';
import { UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BlogComponent } from '../../shared/components/blog/blog.component';
import { DonationCTAComponent } from '../../shared/components/donation-cta/donation-cta.component';
import { HerosectionComponent } from '../../shared/components/herosection/herosection.component';
import { MissionsComponent } from '../../shared/components/missions/missions.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    UpperCasePipe,
    BlogComponent,
     MissionsComponent,
     HerosectionComponent,
     DonationCTAComponent,
     
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  

   titre='Je fais un don '
<<<<<<< HEAD
   text='Soutenez notre cause : chaque don compte pour faire une réelle différence.'
=======
   text='Faire un don pour soutenir notre cause'
>>>>>>> 5278904 (update la mise en forme des pages)
   button='Faire un don'
   titreImage='Comme un rêve' 
   descriptionImage='Le coeur de notre mission'

   articles: any[] = [];


constructor(private blogService: BlogService) {}

ngOnInit(): void {
  this.blogService.getArticles().subscribe(
    (data) => { 
      this.articles = data;
      console.log(data);
});

}

}








