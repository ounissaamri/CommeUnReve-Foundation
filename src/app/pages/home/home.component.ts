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
  

   titre='Je fait un don '
   text='fait un donfait un donfait un donfait un donfait un donfait un don'
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








