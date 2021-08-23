import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipendenzaAffettivaComponent } from './dipendenza-affettiva.component';

describe('DipendenzaAffettivaComponent', () => {
  let component: DipendenzaAffettivaComponent;
  let fixture: ComponentFixture<DipendenzaAffettivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipendenzaAffettivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DipendenzaAffettivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
