import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Stripe, loadStripe } from '@stripe/stripe-js';


@Component({
  selector: 'app-complete-checkout',
  standalone: true,
  imports: [NgIf],
  templateUrl: './complete-checkout.component.html',
})
export class CompleteCheckoutComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}
