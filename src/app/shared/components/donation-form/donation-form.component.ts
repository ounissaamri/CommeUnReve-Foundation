import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterModule } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbar } from '@angular/material/toolbar';
@Component({
  selector: 'app-donation-form',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatToolbar
    
  ],
  templateUrl: './donation-form.component.html',
  styleUrl: './donation-form.component.scss'
})
export class DonationFormComponent {
  
  elementActive: string|null = null
   changeColor(element:string) {
     console.log(element)
     this.elementActive = element
   }


  elementActiveA: string|null = null
   changeColorA(element:string) {
     console.log(element)
     this.elementActiveA = element
   }
  
 
}
