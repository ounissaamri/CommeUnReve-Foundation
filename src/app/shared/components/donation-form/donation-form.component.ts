import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject} from '@angular/core';
import { ControlContainer, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterModule } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbar } from '@angular/material/toolbar';
import { ToggleButtonComponent } from '../toggle-button/toggle-button.component';
import { debounceTime, distinctUntilChanged } from 'rxjs';
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

  listAmount = [{id:1, value:20},{id:2, value:50},{id:3, value:100}]
  listTypeDonation = [{id:1, value: 'Une fois'},{id:2, value:"Donner tous les mois"}]

  elementActive: string|null = null
  elementActiveA: string|null = null
  
   changeColor(element:string) {
     console.log(element)
     this.elementActive = element
   }


  ngOnInit(): void {
    const amount = this.formDirective.form.controls?.['donationFormGroup']?.get('amount');
    amount?.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged()
    )
    .subscribe((amount)=> {
      // if(amount.value !==  Number(this.inputRef.nativeElement.value)) {
      //   this.inputRef.nativeElement.value = null
      // }
    })

    

  }

   changeColorA(element:string) {
     this.elementActiveA = element
   }
  
 
}
