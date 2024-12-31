import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-herosection',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.scss',
})
export class HerosectionComponent {
  @Input() titre!: string;
  @Input() description!: string;
}
