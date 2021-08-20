import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsQuestionsComponent } from './faqs-questions.component';

describe('FaqsQuestionsComponent', () => {
  let component: FaqsQuestionsComponent;
  let fixture: ComponentFixture<FaqsQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqsQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
