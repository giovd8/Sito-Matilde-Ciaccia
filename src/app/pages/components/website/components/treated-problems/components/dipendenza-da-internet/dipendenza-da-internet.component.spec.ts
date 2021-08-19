import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipendenzaDaInternetComponent } from './dipendenza-da-internet.component';

describe('DipendenzaDaInternetComponent', () => {
  let component: DipendenzaDaInternetComponent;
  let fixture: ComponentFixture<DipendenzaDaInternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipendenzaDaInternetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DipendenzaDaInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
