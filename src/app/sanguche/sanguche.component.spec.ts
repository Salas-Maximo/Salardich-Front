import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SangucheComponent } from './sanguche.component';

describe('SangucheComponent', () => {
  let component: SangucheComponent;
  let fixture: ComponentFixture<SangucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SangucheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SangucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
