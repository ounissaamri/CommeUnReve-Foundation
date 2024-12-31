import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    MatCardModule,
    RouterLink,
   
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
 
})
export class BlogComponent implements OnInit ,OnChanges {
  back_url = environment.apiUrl + 'api/file/download/'
  
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  

  @Input() articles: any[] = [];

  constructor(
    private router: Router) {}

  ngOnInit(): void {

    


  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['articles']) {
      console.log('OnChanges - articles changed:', changes['articles'].currentValue);
    }
  }

  navigate(id:any){
    this.router.navigate(['/articles-blog', id])
  }
  
  

}
