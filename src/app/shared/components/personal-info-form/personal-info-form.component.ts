import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {  MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-personal-info-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule
  ],
  templateUrl: './personal-info-form.component.html',
  styleUrl: './personal-info-form.component.scss'
})
export class PersonalInfoFormComponent {
 

}
