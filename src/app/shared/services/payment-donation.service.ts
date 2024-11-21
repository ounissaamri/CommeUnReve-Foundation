import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentDonationService {
  private apiUrl = 'https://api.example.com/payement'; 
  private stripe: Stripe | null = null;
  
  constructor(private http: HttpClient) {
    this.loadStripe();
    console.log(environment)
  }


  async loadStripe(){
    this.stripe = await loadStripe('pk_test_irnXMxSZo8TQfwkiJsy1hrZn00KsIuoNxK')

  }

  createCheckoutSession(lineItems: any) {
    return this.http.post<{ sessionId: string }>('http://localhost:3000/api/create-checkout-session', {
      lineItems: lineItems,
      successUrl: 'http://localhost:4200/complete',
      cancelUrl: 'http://localhost:4200/cancel'
    });
  }

  createSubscriptionSession(customerEmail: string, priceId: string) {
    return this.http.post<{ sessionId: string }>('http://localhost:3000/api/create-subscription-session', {
      customerEmail: customerEmail,
      priceId: 'priceId', // celui renseigner dans la backend
      successUrl: 'http://localhost:4200/complete',
      cancelUrl: 'http://localhost:4200/cancel'
    });
  }

  cancelSubscription(subscriptionId: string) {
    return this.http.post<{ message: string }>(`${this.apiUrl}/cancel-subscription`, { subscriptionId });
  }

  async redirectToCheckout(sessionId: string) {
    if (this.stripe) {
      await this.stripe.redirectToCheckout({ sessionId });
    }
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
