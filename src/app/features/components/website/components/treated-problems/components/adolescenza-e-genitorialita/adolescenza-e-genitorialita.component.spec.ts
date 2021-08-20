import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdolescenzaEGenitorialitaComponent } from './adolescenza-e-genitorialita.component';

describe('AdolescenzaEGenitorialitaComponent', () => {
  let component: AdolescenzaEGenitorialitaComponent;
  let fixture: ComponentFixture<AdolescenzaEGenitorialitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdolescenzaEGenitorialitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdolescenzaEGenitorialitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
