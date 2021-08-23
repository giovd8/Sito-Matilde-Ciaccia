import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValutazionePsicodiagnosticaComponent } from './valutazione-psicodiagnostica.component';

describe('ValutazionePsicodiagnosticaComponent', () => {
  let component: ValutazionePsicodiagnosticaComponent;
  let fixture: ComponentFixture<ValutazionePsicodiagnosticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValutazionePsicodiagnosticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValutazionePsicodiagnosticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
