import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.css'
})
export class DonationComponent {
  @Input() titre! : string
  @Input() text! : string
  @Input() button!: string
}
