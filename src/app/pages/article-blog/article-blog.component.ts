import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-article-blog',
  standalone: true,
  imports: [
    MatCardModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './article-blog.component.html',
  styleUrl: './article-blog.component.css'
})
export class ArticleBlogComponent {
  articles =
  [
    
    {id:1,title:"Article 1", description:"Lorem ipsum dolor sit amet, consectetur sit et adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua."},
    {id:2,title:"Article 2", description:"Lorem ipsum dolor sit amet, consectetur sit et adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua."},
    {id:3,title:"Article 3", description:"Lorem ipsum dolor sit amet, consectetur sit et adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua."},
    {id:4,title:"Article 4", description:"Lorem ipsum dolor sit amet, consectetur sit et adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua."},
    {id:5,title:"Article 5", description:"Lorem ipsum dolor sit amet, consectetur sit et adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua."},
    {id:6,title:"Article 6", description:"Lorem ipsum dolor sit amet, consectetur sit et adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua."}
 ];
 
}

