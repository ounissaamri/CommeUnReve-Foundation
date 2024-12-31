import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-politique-de-confidentialite',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatDividerModule],
  templateUrl: './politique-de-confidentialite.component.html',
  styleUrl: './politique-de-confidentialite.component.css',
})
export class PolitiqueDeConfidentialiteComponent {}
