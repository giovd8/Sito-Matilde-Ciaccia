import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SostegnoPsicologicoComponent } from './sostegno-psicologico.component';

describe('SostegnoPsicologicoComponent', () => {
  let component: SostegnoPsicologicoComponent;
  let fixture: ComponentFixture<SostegnoPsicologicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SostegnoPsicologicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SostegnoPsicologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
