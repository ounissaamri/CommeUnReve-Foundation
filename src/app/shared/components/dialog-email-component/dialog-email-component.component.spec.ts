import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEmailComponentComponent } from './dialog-email-component.component';

describe('DialogEmailComponentComponent', () => {
  let component: DialogEmailComponentComponent;
  let fixture: ComponentFixture<DialogEmailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEmailComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEmailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
