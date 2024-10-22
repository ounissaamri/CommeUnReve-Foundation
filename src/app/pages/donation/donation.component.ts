import { Component } from '@angular/core';
import { DonationFormComponent } from '../../shared/components/donation-form/donation-form.component';
import { SummaryFormComponent } from '../../shared/components/summary-form/summary-form.component';
import { PersonalInfoFormComponent } from '../../shared/components/personal-info-form/personal-info-form.component';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    JsonPipe
  ],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.css'
})
export class DonationComponent {
  paymentForm!:FormGroup
  

constructor(private fb:FormBuilder){

  this.paymentForm = this.fb.group({

    donationFormGroup: this.fb.group({
      amount:[''],
      type: [''],
    }),
    personalInfoFormGroup: this.fb.group({
      isCompany:[false],
      firstname:[null]

    }),
    paymentFormGroup : this.fb.group({
      acceptCgu:[false],
    })
  })

}
}
