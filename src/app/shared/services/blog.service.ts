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
  private apiUrl = environment.apiUrl; // Remplacez par l'URL réelle de l'API

  constructor(private http: HttpClient) {}

  // Récupérer tous les articles de blog
  getArticles(): Observable<BlogArticle[]> {
    return this.http.get<BlogArticle[]>(`${this.apiUrl}/articles`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Récupérer un article spécifique par son ID
  getArticleById(id: number): Observable<BlogArticle> {
    return this.http.get<BlogArticle>(`${this.apiUrl}/articles/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Gestion des erreurs
  private handleError(error: HttpErrorResponse): Observable<never> {
    // Vous pouvez personnaliser ici le traitement des erreurs
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur côté client : ${error.error.message}`;
    } else {
      // Erreur côté serveur
      errorMessage = `Erreur serveur : ${error.status}, message : ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
