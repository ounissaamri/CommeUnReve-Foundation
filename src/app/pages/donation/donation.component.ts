import { Component, inject } from '@angular/core';
import { DonationFormComponent } from '../../shared/components/donation-form/donation-form.component';
import { SummaryFormComponent } from '../../shared/components/summary-form/summary-form.component';
import { PersonalInfoFormComponent } from '../../shared/components/personal-info-form/personal-info-form.component';
import { FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { emailMatchValidator } from '../../shared/validators/emailMatch.validator';
import { ActivatedRoute } from '@angular/router';
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
  activatedRoute = inject(ActivatedRoute)

  get validatorRequiredAndPattern(){
   return [null,{validators:[Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+([ '-][a-zA-ZÀ-ÖØ-öø-ÿ]+)*$/)], updateOn:'blur'}]
  }

  get validatorRequiredAndEmail() {
    return [null,{validators:[Validators.required, Validators.email], updateOn:'blur'}]
  }


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
      isCompany:[false,{validators:Validators.required}],
      postalCode: [null,{validators:[Validators.required, Validators.pattern(/^[0-9]{2,5}$/)], updateOn:'blur'}],
      sirenSiret: [null,{validators:[Validators.required, Validators.pattern(/^[0-9]{9,14}$/)], updateOn:'blur'}],
      firstname:this.validatorRequiredAndPattern,
      lastName: this.validatorRequiredAndPattern,
      email: this.validatorRequiredAndEmail,
      confirmEmail: this.validatorRequiredAndEmail,
      address: this.validatorRequiredAndPattern,
      city: this.validatorRequiredAndPattern,
      country: this.validatorRequiredAndPattern,
      raisonSociale : [null,{validators:[Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+([ '-][a-zA-ZÀ-ÖØ-öø-ÿ]+)*$/)], updateOn:'blur'}],
      formeJuridique: this.validatorRequiredAndPattern,
    }),
    
  },{validators:emailMatchValidator('paymentForm.personalInfoFormGroup')})
}

ngOnInit(){
  const type = this.activatedRoute.snapshot.queryParamMap.get('type');
  if(type) {
    this.paymentForm.get('donationFormGroup')?.patchValue({type:+type})
  }
}



}


