import { JsonPipe } from '@angular/common';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbar } from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';
import { EmailService } from '../../core/services/email.service';

@Component({
  selector: 'app-partenaire',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbar,
    MatCheckboxModule,
    JsonPipe,
    MatSelectModule,
  ],
  templateUrl: './partenaire.component.html',
  styleUrl: './partenaire.component.scss',
})
export class PartenaireComponent implements OnInit {
  partenaireForm!: FormGroup;
  options = [
    { id: 0, label: 'Alimentaire' },
    { id: 1, label: 'Vêtements' },
    { id: 2, label: 'Financier' },
    { id: 3, label: 'Autres' },
  ];
  get validatorRequiredAndPattern() {
    return [
      null,
      {
        validators: [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+([ '-][a-zA-ZÀ-ÖØ-öø-ÿ]+)*$/)],
        updateOn: 'blur',
      },
    ];
  }

  get validatorRequiredAndEmail() {
    return [null, { validators: [Validators.required, Validators.email], updateOn: 'blur' }];
  }

  ngOnInit(): void {
    this.partenaireForm.get('isCompany')?.valueChanges.subscribe((value) => {
      value ? this.addValidatorControl() : this.removeValidatorControl();
    });
  }

  constructor(
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private emailService: EmailService
  ) {
    this.partenaireForm = this.fb.group({
      isCompany: [false, { validators: Validators.required }],
      postalCode: [null, { validators: [Validators.required, Validators.pattern(/^[0-9]{2,5}$/)], updateOn: 'blur' }],
      sirenSiret: [null],
      firstname: this.validatorRequiredAndPattern,
      lastName: this.validatorRequiredAndPattern,
      email: this.validatorRequiredAndEmail,
      address: this.validatorRequiredAndPattern,
      city: this.validatorRequiredAndPattern,
      country: this.validatorRequiredAndPattern,
      raisonSociale: [null],
      formeJuridique: [null],
      typePartenariat: [null, { validators: Validators.required }],
      comment: [null],
      phone: ['', [Validators.pattern(/^(?:\+33|0)[1-9](?:[\s\.]?\d{2}){4}$/)]],
    });
  }

  sendForm() {
    // prevent attack xss
    this.partenaireForm.get('comment')?.patchValue(this.sanitizeInput(this.partenaireForm.get('comment')?.value));
    //map typePartenariat field
    this.partenaireForm
      .get('typePartenariat')
      ?.patchValue(this.options.find((el) => el.id === this.partenaireForm.get('typePartenariat')?.value));
    console.log('send data', this.partenaireForm.value);
    this.emailService.sendPartenaireEmail(this.partenaireForm.value).subscribe();
  }

  sanitizeInput(content: string): string {
    return this.sanitizer.sanitize(SecurityContext.HTML, content) || '';
  }

  addValidatorControl() {
    this.partenaireForm
      .get('raisonSociale')
      ?.addValidators([Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+([ '-][a-zA-ZÀ-ÖØ-öø-ÿ]+)*$/)]);
    this.partenaireForm.get('raisonSociale')?.updateValueAndValidity();

    this.partenaireForm.get('sirenSiret')?.addValidators([Validators.required, Validators.pattern(/^[0-9]{9,14}$/)]);
    this.partenaireForm.get('sirenSiret')?.updateValueAndValidity();

    this.partenaireForm
      .get('formeJuridique')
      ?.addValidators([Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+([ '-][a-zA-ZÀ-ÖØ-öø-ÿ]+)*$/)]);
    this.partenaireForm.get('formeJuridique')?.updateValueAndValidity();
  }

  removeValidatorControl() {
    this.partenaireForm.get('raisonSociale')?.clearValidators();
    this.partenaireForm.get('raisonSociale')?.updateValueAndValidity();

    this.partenaireForm.get('sirenSiret')?.clearValidators();
    this.partenaireForm.get('sirenSiret')?.updateValueAndValidity();

    this.partenaireForm.get('formeJuridique')?.clearValidators();
    this.partenaireForm.get('formeJuridique')?.updateValueAndValidity();
  }
}
