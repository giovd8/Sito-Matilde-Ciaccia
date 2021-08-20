import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatedProblemsComponent } from './treated-problems.component';

describe('TreatedProblemsComponent', () => {
  let component: TreatedProblemsComponent;
  let fixture: ComponentFixture<TreatedProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatedProblemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatedProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
