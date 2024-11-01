import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentDonationService {
  private apiUrl = 'https://api.example.com/payement'; 

  constructor(private http: HttpClient) {}

  // Effectuer le payement
  makeDonation(): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/donation`,{})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erreur côté client : ${error.error.message}`;
    } else {
      errorMessage = `Erreur serveur : ${error.status}, message : ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
