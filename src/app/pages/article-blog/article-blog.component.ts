import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { BlogService } from '../../shared/services/blog.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-article-blog',
  standalone: true,
  imports: [MatCardModule, RouterLink, RouterOutlet],
  templateUrl: './article-blog.component.html',
  styleUrl: './article-blog.component.scss',
})
export class ArticleBlogComponent implements OnInit {
  article: any;
  blogId: any;
  back_url = environment.apiUrl + 'api/file/download/';

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}
  ngOnInit() {
    this.blogId = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap.get('id'));
    if (this.blogId) {
      this.blogService.getArticleById(this.blogId).subscribe((data) => {
        this.article = data;
      });
    }
  }
}
