import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiSommeNousComponent } from './qui-somme-nous.component';

describe('QuiSommeNousComponent', () => {
  let component: QuiSommeNousComponent;
  let fixture: ComponentFixture<QuiSommeNousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuiSommeNousComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuiSommeNousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
