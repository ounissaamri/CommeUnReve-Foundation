import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [MatCardModule, UpperCasePipe, RouterLink],
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.scss',
})
export class MissionsComponent {}
