import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosactionsComponent } from './nosactions.component';

describe('NosactionsComponent', () => {
  let component: NosactionsComponent;
  let fixture: ComponentFixture<NosactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosactionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NosactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
