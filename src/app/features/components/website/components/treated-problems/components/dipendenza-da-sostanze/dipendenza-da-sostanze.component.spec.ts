import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipendenzaDaSostanzeComponent } from './dipendenza-da-sostanze.component';

describe('DipendenzaDaSostanzeComponent', () => {
  let component: DipendenzaDaSostanzeComponent;
  let fixture: ComponentFixture<DipendenzaDaSostanzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipendenzaDaSostanzeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DipendenzaDaSostanzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
