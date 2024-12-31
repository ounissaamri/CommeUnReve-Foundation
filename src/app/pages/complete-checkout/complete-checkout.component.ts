import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-complete-checkout',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './complete-checkout.component.html',
  styleUrl: './complete-checkout.component.scss',
})
export class CompleteCheckoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
