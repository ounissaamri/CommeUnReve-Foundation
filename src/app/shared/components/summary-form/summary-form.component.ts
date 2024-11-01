import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTableDataSource , MatTableModule } from '@angular/material/table';

import { ControlContainer, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { distinctUntilChanged, tap } from 'rxjs';
import { PaymentDonationService } from '../../services/payment-donation.service';
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
  statusForm: any =  'INVALID'

  constructor(private paymentDonationService:PaymentDonationService ){}

  ngOnInit(): void {

    console.log(this.formDirective)
    const amount = this.formDirective.form.controls?.['donationFormGroup']?.get('amount');

    this.formDirective.form.statusChanges.pipe(
      tap(console.log),
      distinctUntilChanged()
    ).subscribe((status)=> {
      this.statusForm = status;
    })

    amount?.valueChanges
    .pipe(
      tap(console.log),
      distinctUntilChanged()
    )
    .subscribe((amount:string)=> {
      this.updateTotalAmount(amount)
    })
  }

  updateTotalAmount(amount: string) {
    this.totalAmount = +amount;
  }

  makeDonation() {
    //this.paymentDonationService.makeDonation()
  }
}