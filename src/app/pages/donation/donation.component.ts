import { Component } from '@angular/core';
import { DonationFormComponent } from '../../shared/components/donation-form/donation-form.component';
import { SummaryFormComponent } from '../../shared/components/summary-form/summary-form.component';
import { PersonalInfoFormComponent } from '../../shared/components/personal-info-form/personal-info-form.component';
import { FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [
    DonationFormComponent,
    SummaryFormComponent,
    PersonalInfoFormComponent,
    ReactiveFormsModule,
    JsonPipe,
    ReactiveFormsModule
  ],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.scss'
})
export class DonationComponent {
  paymentForm!:FormGroup;
  

constructor(private fb:FormBuilder){

  this.paymentForm = this.fb.group({
    donationFormGroup: this.fb.group({
      amount:[null, Validators.required],
      type: [null, Validators.required],
    }),
    summaryFormGroup: this.fb.group({
      cgu:[null, Validators.requiredTrue],
    }),
    personalInfoFormGroup: this.fb.group({
      isCompany:[false,Validators.required],
      firstname:[null,Validators.required],
      lastName: [null,Validators.required],
      email: [null,[Validators.required, Validators.email]],
      confirmEmail: [null,[Validators.required, Validators.email]],
      address: [null,Validators.required],
      postalCode: [null,[Validators.required, Validators.pattern(/^[0-9]{5,5}$/)]],
      city: [null,Validators.required],
      country: [null,Validators.required],
      raisonSociale : [null,Validators.required],
      sirenSiret: [null,[Validators.pattern(/^[0-9]{9,14}$/)]],
      formeJuridique: [null,Validators.required]
    }),
    
  })
  
}

}


