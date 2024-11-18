import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject} from '@angular/core';
import { ControlContainer, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterModule } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbar } from '@angular/material/toolbar';
import { ToggleButtonComponent } from '../toggle-button/toggle-button.component';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { toggleButtonOption } from '../../interfaces/toggle-button-options';
import { AmountPaymentContantes, TypePaymentContantes } from "./../../constantes/toggle-button-option";

@Component({
  selector: 'app-donation-form',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatToolbar,
    ReactiveFormsModule,
    ToggleButtonComponent
  ],
  templateUrl: './donation-form.component.html',
  styleUrl: './donation-form.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class DonationFormComponent {
  formDirective = inject(FormGroupDirective)
  @ViewChild('inputRef') inputRef!: ElementRef;

  listTypeDonation : toggleButtonOption[] = [
    {id:1,type: TypePaymentContantes.TYPE_PAYMENT.SUBSCRIPTION, libelle: TypePaymentContantes.LIBELLE.EVERY_MONTH},
     {id:2,type: TypePaymentContantes.TYPE_PAYMENT.PAYMENT, libelle: TypePaymentContantes.LIBELLE.ONE_TIME}
    ]

  listAmount : toggleButtonOption[] = [
    { id:1,libelle: AmountPaymentContantes.LIBELLE.TWENTY},
    { id:2,libelle: AmountPaymentContantes.LIBELLE.FIFTY},
    {id:3,libelle: AmountPaymentContantes.LIBELLE.HUNDRED}
  ]


  // Faire api stripe pour le paiement
  // faire api stripe pour abonnement

  elementActive: string|null = null
  elementActiveA: string|null = null
  
   changeColor(element:string) {
     console.log(element)
     this.elementActive = element
   }


  ngOnInit(): void {
    const amount = this.formDirective.form.controls?.['donationFormGroup']?.get('amount')
    const amountOptions = this.formDirective.form.controls?.['donationFormGroup']?.get('amountOptions')
    
    amount?.valueChanges
    .pipe(
      debounceTime(300),
      filter((value)=> value !== null),
      distinctUntilChanged()
    )
    .subscribe(_=> {
        amountOptions?.setValue(null);
        amountOptions?.clearValidators();
        amountOptions?.updateValueAndValidity();
        amount.addValidators(Validators.required);
        amount.updateValueAndValidity()
    })


    amountOptions?.valueChanges
    .pipe(
      debounceTime(300),
      filter((value)=> value !== null),
      distinctUntilChanged(),
    )
    .subscribe(_=> {
      amount?.setValue(null);
      amount?.clearValidators();
      amount?.updateValueAndValidity();
      amountOptions.addValidators(Validators.required);
      amountOptions.updateValueAndValidity();
    })
  }

   changeColorA(element:string) {
     this.elementActiveA = element
   }
}
