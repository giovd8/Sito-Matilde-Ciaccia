import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameBackButtonComponent } from './came-back-button.component';

describe('CameBackButtonComponent', () => {
  let component: CameBackButtonComponent;
  let fixture: ComponentFixture<CameBackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameBackButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
