import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-benevole',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './benevole.component.html',
  styleUrl: './benevole.component.scss',

})
export class BenevoleComponent {
contactForm!: FormGroup;
}


