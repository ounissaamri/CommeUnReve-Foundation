import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgirAvecNousComponent } from './agir-avec-nous.component';

describe('AgirAvecNousComponent', () => {
  let component: AgirAvecNousComponent;
  let fixture: ComponentFixture<AgirAvecNousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgirAvecNousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgirAvecNousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
