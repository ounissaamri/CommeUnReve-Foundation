import { Component, SecurityContext, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DomSanitizer } from '@angular/platform-browser';
import { EmailService } from '../../core/services/email.service';
import { DialogEmailComponentComponent } from '../../shared/components/dialog-email-component/dialog-email-component.component';

@Component({
  selector: 'app-benevole',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './benevole.component.html',
  styleUrl: './benevole.component.scss',
})
export class BenevoleComponent {
  benevoleForm!: FormGroup;
  readonly dialog = inject(MatDialog);

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

  constructor(
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private emailService: EmailService
  ) {
    this.benevoleForm = this.fb.group({
      firstname: this.validatorRequiredAndPattern,
      lastName: this.validatorRequiredAndPattern,
      email: this.validatorRequiredAndEmail,
      comment: [null],
      phone: ['', [Validators.pattern(/^(?:\+33|0)[1-9](?:[\s\.]?\d{2}){4}$/)]],
    });
  }
  sendForm(event: any): any {
    // prevent attack xss
    this.benevoleForm.get('comment')?.patchValue(this.sanitizeInput(this.benevoleForm.get('comment')?.value));
    this.emailService.sendBenevoleEmail(this.benevoleForm.value).subscribe(
      () => {
        this.openDialog();
      },
      (err) => {
        this.openDialog();
      }
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogEmailComponentComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.benevoleForm.reset();
    });
  }

  sanitizeInput(content: string): string {
    return this.sanitizer.sanitize(SecurityContext.HTML, content) || '';
  }
}
