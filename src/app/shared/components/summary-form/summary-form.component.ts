import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbar } from '@angular/material/toolbar';
@Component({
  selector: 'app-summary-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatCardActions,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatToolbar
  ],
  templateUrl: './summary-form.component.html',
  styleUrl: './summary-form.component.scss'
})
export class SummaryFormComponent {

}
