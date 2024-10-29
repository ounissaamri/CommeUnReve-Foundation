import { CurrencyPipe, NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, Input, forwardRef, inject } from '@angular/core';
import { FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { tap, distinctUntilChanged, debounceTime } from 'rxjs';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [ MatButtonToggleModule, NgStyle,NgClass, CurrencyPipe],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleButtonComponent),
      multi: true
    }
  ]
})
export class ToggleButtonComponent{

    formDirective =  inject(FormGroupDirective)
  @Input() buttons!: {id:number, value:any}[];
  value!: number;  

  elementActive: number|null = null


  ngOnInit(): void {
    const amount = this.formDirective.form.controls?.['donationFormGroup']?.get('amount');
    amount?.valueChanges
    .pipe(
      debounceTime(800),
      distinctUntilChanged()
    )
    .subscribe((amount:string)=> {
      if(typeof this.value === 'number') {
        this.writeValue(amount)
      }
    })
  }
  
  // Les fonctions qui seront appelées par Angular
  onChange = (value: any) => {};
  onTouched = () => {};

  // Méthode appelée par Angular pour écrire une nouvelle valeur
  writeValue(value: any): void {
    this.value = value;
  }

  // Enregistrer la fonction de changement
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Enregistrer la fonction de "touched"
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Gérer le changement de valeur lorsque l'utilisateur clique sur un bouton
  setValue(option: number) {
    this.value = option;
    this.onChange(option);
    this.onTouched();
  }


}
