import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeInDeptComponent } from './about-me-in-dept.component';

describe('AboutMeInDeptComponent', () => {
  let component: AboutMeInDeptComponent;
  let fixture: ComponentFixture<AboutMeInDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeInDeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeInDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
