import { Component, OnInit, SecurityContext } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DomSanitizer } from '@angular/platform-browser';
import { EmailService } from '../../core/services/email.service';


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
benevoleForm!: FormGroup;
get validatorRequiredAndPattern(){
  return [null,{validators:[Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+([ '-][a-zA-ZÀ-ÖØ-öø-ÿ]+)*$/)], updateOn:'blur'}]
 }
 get validatorRequiredAndEmail() {
  return [null,{validators:[Validators.required, Validators.email], updateOn:'blur'}]
}

constructor(private fb:FormBuilder, private sanitizer:DomSanitizer,private emailService:EmailService){
  this.benevoleForm= this.fb.group({
    firstname:this.validatorRequiredAndPattern,
    lastName: this.validatorRequiredAndPattern,
    email: this.validatorRequiredAndEmail,
    comment: [null],
    phone: ['',
      [
        Validators.pattern(/^(?:\+33|0)[1-9](?:[\s\.]?\d{2}){4}$/)
      ]
    ]
    })
}
sendForm(event:any){
  // prevent attack xss
  this.benevoleForm.get('comment')?.patchValue(this.sanitizeInput(this.benevoleForm.get('comment')?.value))
  this.emailService.sendBenevoleEmail(this.benevoleForm.value).subscribe()
}

sanitizeInput(content: string): string {
  return this.sanitizer.sanitize(SecurityContext.HTML, content) || '';
}
}


