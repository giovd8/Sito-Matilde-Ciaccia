import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercorsoCrescitaPersonaleComponent } from './percorso-crescita-personale.component';

describe('PercorsoCrescitaPersonaleComponent', () => {
  let component: PercorsoCrescitaPersonaleComponent;
  let fixture: ComponentFixture<PercorsoCrescitaPersonaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercorsoCrescitaPersonaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercorsoCrescitaPersonaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
