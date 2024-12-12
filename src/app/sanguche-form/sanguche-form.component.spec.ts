import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SangucheFormComponent } from './sanguche-form.component';

describe('SangucheFormComponent', () => {
  let component: SangucheFormComponent;
  let fixture: ComponentFixture<SangucheFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SangucheFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SangucheFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
