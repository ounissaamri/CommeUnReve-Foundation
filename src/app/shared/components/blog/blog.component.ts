import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    MatCardModule,
    RouterLink
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
 
})
export class BlogComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  
  

}
