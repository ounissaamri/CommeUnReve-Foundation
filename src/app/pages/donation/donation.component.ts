import { Component } from '@angular/core';
import { DonationFormComponent } from '../../shared/components/donation-form/donation-form.component';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [
    DonationFormComponent
  ],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.css'
})
export class DonationComponent {

}
