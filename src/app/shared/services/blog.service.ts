import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface BlogArticle {
  id: number;
  title: string;
  content: string;
  author: string;
  publishedDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  getBlogService(BlogService: BlogService) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = environment.apiUrl; // Remplacez par l'URL réelle de l'API

  constructor(private http: HttpClient) {}

  // Récupérer tous les articles de blog
  getArticles(): Observable<BlogArticle[]> {
    return this.http.get<BlogArticle[]>(`${this.apiUrl}api/blog/blogs`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Récupérer un article spécifique par son ID
  getArticleById(id: number): Observable<BlogArticle> {
    return this.http.get<BlogArticle>(`${this.apiUrl}api/blog/blog/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  //Gestion des erreurs
  private handleError(error: HttpErrorResponse): Observable<never> {
    //Vous pouvez personnaliser ici le traitement des erreurs
    return throwError(() => new Error());
  }
}
