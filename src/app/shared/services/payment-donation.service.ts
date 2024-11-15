import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentDonationService {
  private apiUrl = environment.apiUrl; 
  private hostUrl = environment.hostUrl; 

  private stripe: Stripe | null = null;
  
  constructor(private http: HttpClient) {
    this.loadStripe();
  }


  async loadStripe(){
    this.stripe = await loadStripe(environment.stripePubKey)
  }
                      
  createCheckoutSession(lineItems: any) {
    return this.http.post<{ sessionId: string }>(`${this.apiUrl}/create-checkout-session`, {
      lineItems: lineItems,
      successUrl:`${this.hostUrl}/complete`,
      cancelUrl:`${this.hostUrl}/cancel`
    });
  }  
          
  createSubscriptionSession(customerEmail: string, priceId: string) {
    return this.http.post<{ sessionId: string }>(`${this.apiUrl}/create-subscription-session`, {
      customerEmail: customerEmail,
      priceId: 'priceId', // celui renseigner dans la backend
      successUrl:`${this.hostUrl}/complete`,
      cancelUrl:`${this.hostUrl}/cancel`
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
