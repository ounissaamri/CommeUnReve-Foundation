import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteCheckoutComponent } from './complete-checkout.component';

describe('CompleteCheckoutComponent', () => {
  let component: CompleteCheckoutComponent;
  let fixture: ComponentFixture<CompleteCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteCheckoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
