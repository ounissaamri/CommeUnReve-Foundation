import { Component } from '@angular/core';
import { ControlContainer, FormGroupDirective, NgModel } from '@angular/forms';
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
export class PersonalInfoFormComponent  {

  showForm:boolean = false;
  
  toggleForm(){
    this.showForm = !this.showForm;
  }
  changeTogglecheckbox(){
    return this.showForm ? 'Payer en tant que entrepise ;)' : 'Payer en tant que entrepise' ; 
  }
  changeToggleprenom(){
    return this.showForm ? 'Prénom  du contact' : 'Prénom' ; 
  }
  changeTogglenom(){
    return this.showForm ? 'nom du contanct' : 'nom' ; 
}

}
