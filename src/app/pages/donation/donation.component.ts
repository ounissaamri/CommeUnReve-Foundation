import { Component } from '@angular/core';
import { DonationFormComponent } from '../../shared/components/donation-form/donation-form.component';
import { SummaryFormComponent } from '../../shared/components/summary-form/summary-form.component';
import { PersonalInfoFormComponent } from '../../shared/components/personal-info-form/personal-info-form.component';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [
    DonationFormComponent,
    SummaryFormComponent,
    PersonalInfoFormComponent
  ],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.css'
})
export class DonationComponent {

}
