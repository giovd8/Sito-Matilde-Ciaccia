import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiziCheOffroComponent } from './servizi-che-offro.component';

describe('ServiziCheOffroComponent', () => {
  let component: ServiziCheOffroComponent;
  let fixture: ComponentFixture<ServiziCheOffroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiziCheOffroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiziCheOffroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
