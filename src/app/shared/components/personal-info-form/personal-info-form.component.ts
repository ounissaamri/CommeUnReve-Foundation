import { Component, inject, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-personal-info-form',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatToolbar,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    
  ],
  templateUrl: './personal-info-form.component.html',
  styleUrl: './personal-info-form.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]

})
export class PersonalInfoFormComponent implements OnInit  {
  formDirective =  inject(FormGroupDirective)
  isCompany = false

 formParent!: FormGroup;

  
  ngOnInit(){
    this.formDirective?.form.get('personalInfoFormGroup')?.get('isCompany')?.valueChanges.subscribe(value => {
      this.isCompany = value;
      value ? this.addValidatorControl() : this.removeValidatorControl();
    })

  }

  addValidatorControl(){
    this.formDirective?.form.get('personalInfoFormGroup.raisonSociale')?.addValidators(Validators.required);
    this.formDirective?.form.get('personalInfoFormGroup.raisonSociale')?.updateValueAndValidity()

    this.formDirective?.form.get('personalInfoFormGroup.sirenSiret')?.addValidators([Validators.required, Validators.pattern(/^[0-9]{9,14}$/)]);
    this.formDirective?.form.get('personalInfoFormGroup.sirenSiret')?.updateValueAndValidity();

    this.formDirective?.form.get('personalInfoFormGroup.formeJuridique')?.addValidators(Validators.required);
    this.formDirective?.form.get('personalInfoFormGroup.formeJuridique')?.updateValueAndValidity();
  }

  removeValidatorControl(){
    this.formDirective?.form.get('personalInfoFormGroup.raisonSociale')?.clearValidators();
    this.formDirective?.form.get('personalInfoFormGroup.raisonSociale')?.updateValueAndValidity();

    this.formDirective?.form.get('personalInfoFormGroup.sirenSiret')?.clearValidators();
    this.formDirective?.form.get('personalInfoFormGroup.sirenSiret')?.updateValueAndValidity();

    this.formDirective?.form.get('personalInfoFormGroup.formeJuridique')?.clearValidators();
    this.formDirective?.form.get('personalInfoFormGroup.formeJuridique')?.updateValueAndValidity();
  }

  

}
