import { Component, inject } from '@angular/core';
import { DonationFormComponent } from '../../shared/components/donation-form/donation-form.component';
import { SummaryFormComponent } from '../../shared/components/summary-form/summary-form.component';
import { PersonalInfoFormComponent } from '../../shared/components/personal-info-form/personal-info-form.component';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { emailMatchValidator } from '../../shared/validators/emailMatch.validator';
import { ActivatedRoute } from '@angular/router';
import { PaymentDonationService } from '../../shared/services/payment-donation.service';
import { TypePaymentContantes } from "../../shared/models/constantes/toggle-button-option";
import { delay, filter, take } from 'rxjs';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [
    DonationFormComponent,
    SummaryFormComponent,
    PersonalInfoFormComponent,
    ReactiveFormsModule,
    JsonPipe,
  ],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.scss'
})
export class DonationComponent {
  paymentForm!:FormGroup;
  activatedRoute = inject(ActivatedRoute)

  get validatorRequiredAndPattern(){
   return [null,{validators:[Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+([ '-][a-zA-ZÀ-ÖØ-öø-ÿ]+)*$/)], updateOn:'blur'}]
  }
  get fieldNotRequired(){
   return [null]
  }

  get validatorRequiredAndEmail() {
    return [null,{validators:[Validators.required, Validators.email], updateOn:'blur'}]
  }



constructor(private fb:FormBuilder, private paymentDonationService:PaymentDonationService){

  // this.paymentForm = this.fb.group({
  //   donationFormGroup: this.fb.group({
  //     amount:[null, Validators.required],
  //     amountOptions:[null, Validators.required],
  //     type: [null, Validators.required],
  //   }),
  //   summaryFormGroup: this.fb.group({
  //     cgu:[null, Validators.requiredTrue],
  //   }),
  //   personalInfoFormGroup: this.fb.group({
  //     isCompany:[false,{validators:Validators.required}],
  //     postalCode: [null,{validators:[Validators.required, Validators.pattern(/^[0-9]{2,5}$/)], updateOn:'blur'}],
  //     sirenSiret: this.fieldNotRequired,
  //     firstname:this.validatorRequiredAndPattern,
  //     lastName: this.validatorRequiredAndPattern,
  //     email: this.validatorRequiredAndEmail,
  //     confirmEmail: this.validatorRequiredAndEmail,
  //     address: [null,{validators:Validators.required}],
  //     city: this.validatorRequiredAndPattern,
  //     country: this.validatorRequiredAndPattern,
  //     raisonSociale : this.fieldNotRequired,
  //     formeJuridique: this.fieldNotRequired,
  //   }),
    
  // },{validators:emailMatchValidator('paymentForm.personalInfoFormGroup')})

  this.paymentForm = this.fb.group({
    donationFormGroup: this.fb.group({
      amount: [null],
      type: [null],
    }),
    summaryFormGroup: this.fb.group({
      cgu: [null],
    }),
    personalInfoFormGroup: this.fb.group({
      isCompany: [false],
      postalCode: [null],
      sirenSiret: [null],
      firstname: [null],
      lastName: [null],
      email: [null],
      confirmEmail: [null],
      address: [null],
      city: [null],
      country: [null],
      raisonSociale: [null],
      formeJuridique: [null],
    })
  });
  
}

 ngOnInit(){

  this.activatedRoute.queryParams.pipe(
    filter(params=> params['subscription']),
    delay(100),
    take(1),
  ).subscribe(param => {
    const subscription = param['subscription'];
    this.paymentForm.get('donationFormGroup.type')?.setValue({id:1,type: TypePaymentContantes.TYPE_PAYMENT.SUBSCRIPTION, libelle: TypePaymentContantes.LIBELLE.EVERY_MONTH});
    this.paymentForm.get('donationFormGroup.type')?.updateValueAndValidity()
  })

 }

 initPayment() {
  const lineItems = [
    {
      price_data: {
        currency: 'EUR',
        product_data: {
          name: 'Produit Exemple',
        },
        unit_amount: 50, // En cents (50$)
      },
      quantity: 1,
    },
  ];

  this.paymentDonationService.createCheckoutSession(lineItems).subscribe({
    next: (res) => {
      if (res.sessionId) {
        this.paymentDonationService.redirectToCheckout(res.sessionId);
      }
    },
    error: (err) => console.error('Erreur de création de session:', err),
  });
}

initSubscription() {
  // const email = this.paymentForm.controls?.['personalInfoFormGroup.email'].value
  // const price = this.paymentForm.controls?.['personalInfoFormGroup.price'].value

  this.paymentDonationService.createSubscriptionSession('burdy.gou@gmail.com', 'price').subscribe({
    next: (res:any) => {
      if (res.sessionId) {
        this.paymentDonationService.redirectToCheckout(res.sessionId);
      }
    },
    error: (err:any) => console.error('Erreur de création de session:', err),
  });
}

// cancelSubscription() {
//   this.subscriptionService.cancelSubscription(this.subscriptionId).subscribe({
//     next: (response) => {
//       console.log(response.message);  // Message de succès
//     },
//     error: (error) => {
//       console.error('Erreur lors de l\'annulation de l\'abonnement', error);
//     },
//   });
// }

}


