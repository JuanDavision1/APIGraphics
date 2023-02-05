import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasBarraComponent } from './graficas-barra.component';

describe('GraficasBarraComponent', () => {
  let component: GraficasBarraComponent;
  let fixture: ComponentFixture<GraficasBarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficasBarraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficasBarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
