import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-donation-cta',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './donation-cta.component.html',
  styleUrl: './donation-cta.component.css'
})
export class DonationCTAComponent {
  @Input() titre! : string
  @Input() text! : string
  @Input() button!: string
}