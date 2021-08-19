import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipendenzaSessualeComponent } from './dipendenza-sessuale.component';

describe('DipendenzaSessualeComponent', () => {
  let component: DipendenzaSessualeComponent;
  let fixture: ComponentFixture<DipendenzaSessualeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipendenzaSessualeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DipendenzaSessualeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
