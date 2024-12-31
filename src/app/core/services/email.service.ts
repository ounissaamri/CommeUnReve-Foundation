import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FormMapper } from '../models/form-mapper';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  // L'URL de l'API d'envoi d'email que tu rajouteras plus tard
  private apiUrl = environment.apiUrl; // Remplacez par l'URL réelle de l'API

  constructor(private http: HttpClient) {}

  // Méthode pour envoyer un email
  sendPartenaireEmail(emailData: { to: string; subject: string; body: string }): Observable<any> {
    const mappedData = new FormMapper(emailData);

    // Créer l'objet email que nous allons envoyer
    const emailPayload = {
      name: mappedData.name,
      lastName: mappedData.lastName,
      message: mappedData.message,
      info: mappedData.info,
    };
    console.log(emailPayload);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(this.apiUrl + 'api/email/send-partenaire', emailPayload, { headers });
  }

  sendBenevoleEmail(emailData: { to: string; subject: string; body: string }): Observable<any> {
    const mappedData = new FormMapper(emailData);

    // Créer l'objet email que nous allons envoyer
    const emailPayload = {
      name: mappedData.name,
      lastName: mappedData.lastName,
      message: mappedData.message,
      info: mappedData.info,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(this.apiUrl + 'api/email/send-benevole', emailPayload, { headers });
  }
}
