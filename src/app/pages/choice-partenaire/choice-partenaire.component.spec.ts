import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoicePartenaireComponent } from './choice-partenaire.component';

describe('ChoicePartenaireComponent', () => {
  let component: ChoicePartenaireComponent;
  let fixture: ComponentFixture<ChoicePartenaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoicePartenaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoicePartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
