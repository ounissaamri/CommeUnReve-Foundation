import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCTAComponent } from './donation-cta.component';

describe('DonationCTAComponent', () => {
  let component: DonationCTAComponent;
  let fixture: ComponentFixture<DonationCTAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationCTAComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DonationCTAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
