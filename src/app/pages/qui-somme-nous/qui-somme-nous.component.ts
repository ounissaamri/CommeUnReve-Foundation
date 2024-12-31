import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-qui-somme-nous',
  standalone: true,
  imports: [MatCardContent, MatCard, MatCardHeader, MatCardTitle],
  templateUrl: './qui-somme-nous.component.html',
  styleUrl: './qui-somme-nous.component.scss',
})
export class QuiSommeNousComponent {}
