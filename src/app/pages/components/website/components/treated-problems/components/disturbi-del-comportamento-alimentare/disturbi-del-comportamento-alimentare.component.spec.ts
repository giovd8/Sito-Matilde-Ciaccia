import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisturbiDelComportamentoAlimentareComponent } from './disturbi-del-comportamento-alimentare.component';

describe('DisturbiDelComportamentoAlimentareComponent', () => {
  let component: DisturbiDelComportamentoAlimentareComponent;
  let fixture: ComponentFixture<DisturbiDelComportamentoAlimentareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisturbiDelComportamentoAlimentareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisturbiDelComportamentoAlimentareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
