import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsAndConcessionsComponent } from './faqs-and-concessions.component';

describe('FaqsAndConcessionsComponent', () => {
  let component: FaqsAndConcessionsComponent;
  let fixture: ComponentFixture<FaqsAndConcessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqsAndConcessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsAndConcessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
