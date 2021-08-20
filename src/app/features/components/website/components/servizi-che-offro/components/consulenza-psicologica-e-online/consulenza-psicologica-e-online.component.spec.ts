import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulenzaPsicologicaEOnlineComponent } from './consulenza-psicologica-e-online.component';

describe('ConsulenzaPsicologicaEOnlineComponent', () => {
  let component: ConsulenzaPsicologicaEOnlineComponent;
  let fixture: ComponentFixture<ConsulenzaPsicologicaEOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulenzaPsicologicaEOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulenzaPsicologicaEOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
