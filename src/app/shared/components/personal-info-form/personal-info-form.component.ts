import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  selection: string;
  don: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {selection: 'Don', don: 50},
  {selection: 'Votre contribution à HelloAsso', don: 0}
];


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
  displayedColumns: string[] = ['selection', 'don'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  total = ELEMENT_DATA.reduce((acc, val) => acc + val.don, 0);

}
