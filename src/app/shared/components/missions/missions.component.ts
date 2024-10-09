import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [
    MatCardModule,
    UpperCasePipe
  ],
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.scss'
})
export class MissionsComponent {

}
