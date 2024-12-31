import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterOutlet,
    MatCardModule,
    RouterLink,MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen: boolean = false

  constructor(private router:Router){}
  
  naviguer() {
    this.router.navigate(['/qui-sommes-nous'])
  }
  navigeurs() {
    this.router.navigate(['/nosactions'])
  }


toggleMenu(): void {
  this.menuOpen = !this.menuOpen;
}
}
