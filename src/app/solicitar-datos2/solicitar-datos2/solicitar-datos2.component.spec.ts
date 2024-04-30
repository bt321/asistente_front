import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarDatos2Component } from './solicitar-datos2.component';

describe('SolicitarDatos2Component', () => {
  let component: SolicitarDatos2Component;
  let fixture: ComponentFixture<SolicitarDatos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolicitarDatos2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitarDatos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
