import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { EmailService } from '../../core/services/email.service';
import { BenevoleComponent } from './benevole.component';

describe('BenevoleComponent - sendForm', () => {
  let component: BenevoleComponent;
  let fixture: ComponentFixture<BenevoleComponent>;
  let emailService: jasmine.SpyObj<EmailService>;
  let sanitizer: jasmine.SpyObj<DomSanitizer>;

  beforeEach(async () => {
    const emailSpy = jasmine.createSpyObj('EmailService', ['sendBenevoleEmail']);
    const sanitizerSpy = jasmine.createSpyObj('DomSanitizer', ['sanitize']);

    await TestBed.configureTestingModule({
      imports: [BenevoleComponent, ReactiveFormsModule, BrowserAnimationsModule],
      providers: [
        FormBuilder,
        { provide: EmailService, useValue: emailSpy },
        { provide: DomSanitizer, useValue: sanitizerSpy },
      ],
    }).compileComponents();

    emailService = TestBed.inject(EmailService) as jasmine.SpyObj<EmailService>;
    sanitizer = TestBed.inject(DomSanitizer) as jasmine.SpyObj<DomSanitizer>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenevoleComponent);
    component = fixture.componentInstance;

    // Initialisation du formulaire
    component.benevoleForm = new FormBuilder().group({
      comment: [''],
      firstname: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      // Ajoutez ici les autres champs du formulaire si nécessaire
    });

    fixture.detectChanges();
  });

  it('should sanitize comment and send email', () => {
    // Arrange
    const mockComment = '<script>alert("xss")</script>Commentaire test';
    const sanitizedComment = 'Commentaire test'; // Le résultat attendu après sanitization
    const mockFormValue = { comment: mockComment };

    component.benevoleForm.patchValue(mockFormValue);
    spyOn(component, 'sanitizeInput').and.returnValue(sanitizedComment);
    emailService.sendBenevoleEmail.and.returnValue(of({}));

    // Act
    component.sendForm({} as any);

    // Assert
    expect(component.sanitizeInput).toHaveBeenCalledWith(mockComment);
    expect(component.benevoleForm.get('comment')?.value).toBe(sanitizedComment);
    expect(emailService.sendBenevoleEmail).toHaveBeenCalledWith(component.benevoleForm.value);
  });

  it('should send email with empty comment', () => {
    // Arrange
    const emptyComment = '';
    component.benevoleForm.patchValue({ comment: emptyComment });
    spyOn(component, 'sanitizeInput').and.returnValue(emptyComment);
    emailService.sendBenevoleEmail.and.returnValue(of({}));

    // Act
    component.sendForm({} as any);

    // Assert
    expect(component.sanitizeInput).toHaveBeenCalledWith(emptyComment);
    expect(emailService.sendBenevoleEmail).toHaveBeenCalledWith(component.benevoleForm.value);
  });

  // Test pour vérifier si la méthode sanitizeInput utilise correctement le DomSanitizer
  it('should use DomSanitizer in sanitizeInput method', () => {
    // Arrange
    const mockComment = '<script>alert("xss")</script>Commentaire test';
    sanitizer.sanitize.and.returnValue('Commentaire test');

    // Act
    const result = component.sanitizeInput(mockComment);

    // Assert
    expect(sanitizer.sanitize).toHaveBeenCalled();
    expect(result).toBe('Commentaire test');
  });
});
