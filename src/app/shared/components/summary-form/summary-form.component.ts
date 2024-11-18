import { Component, OnInit, inject, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

import { ControlContainer, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { distinctUntilChanged, filter, map, tap } from 'rxjs';
import { toggleButtonOption } from '../../interfaces/toggle-button-options';
import { TypePaymentContantes } from "./../../constantes/toggle-button-option";

@Component({
  selector: 'app-summary-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatCardActions,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatToolbar,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule

    
  ],
  templateUrl: './summary-form.component.html',
  styleUrl: './summary-form.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class SummaryFormComponent implements OnInit {
  formDirective =  inject(FormGroupDirective)
  totalAmount: number = 0;
  statusForm: any =  'INVALID';
  initPayment = output<boolean>()
  isOneTimePayment!: boolean;
  constructor(){}

  ngOnInit(): void {

    const amount = this.formDirective.form.controls?.['donationFormGroup']?.get('amount');
    const amountOptions = this.formDirective.form.controls?.['donationFormGroup']?.get('amountOptions');
    const type = this.formDirective.form.get('donationFormGroup.type');


    type?.valueChanges.subscribe(value => {
      value.type === TypePaymentContantes.TYPE_PAYMENT.SUBSCRIPTION ? this.isOneTimePayment = false :  this.isOneTimePayment = true;
    })

    this.formDirective.form.statusChanges.pipe(
      tap(console.log),
      distinctUntilChanged()
    ).subscribe((status)=> {
      this.statusForm = status;
    })

    // from togglebutton
    amountOptions?.valueChanges
    .pipe(
      filter((value:toggleButtonOption)=> value !== null),
      map(value => value.libelle),
      distinctUntilChanged()
    )
    .subscribe((libelle)=> {
      this.updateTotalAmount(Number(libelle))
    });

    amount?.valueChanges
    .pipe(
      filter((value)=> value !== null),
      distinctUntilChanged()
    )
    .subscribe((amount:number)=> {
      this.updateTotalAmount(amount)
    });
  }

  updateTotalAmount(amount: number) {
    this.totalAmount = amount;
  }

  makeDonation() {
    this.initPayment.emit(true)
  }

  
}