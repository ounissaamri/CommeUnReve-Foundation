import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-herosection',
  standalone: true,
  imports: [
    UpperCasePipe,
  ],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.scss'
})
export class HerosectionComponent {
@Input() titreb = 'Comme un rêve'
@Input() descriptionb= 'le coeur de notre mission'
}
