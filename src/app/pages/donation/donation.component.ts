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
      amount:[''],
      type: [''],
    }),
    personalInfoFormGroup: this.fb.group({
      isCompany:[false],
      firstname:[null,Validators.required],
      lastName: [null,Validators.required],
      email: [null,Validators.required],
      confirmEmail: [null,[Validators.required, Validators.email]],
      address: [null,[Validators.required, Validators.email]],
      postalCode: [null,Validators.required],
      city: [null,Validators.required],
      country: [null,Validators.required],
      Raisonsociale : [null,Validators.required],
      sirenSiret: [null,Validators.required],
      formeJuridique: [null,Validators.required]
    }),
    
  })
  
}

}


