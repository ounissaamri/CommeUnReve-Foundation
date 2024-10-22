import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTableDataSource , MatTableModule } from '@angular/material/table';

import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { distinctUntilChanged, tap } from 'rxjs';
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
    MatTableModule
  ],
  templateUrl: './summary-form.component.html',
  styleUrl: './summary-form.component.css',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class SummaryFormComponent implements OnInit {
  formDirective =  inject(FormGroupDirective)
  totalAmount: number = 0;
  ngOnInit(): void {
    const amount = this.formDirective.form.controls?.['donationFormGroup']?.get('amount');
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
}