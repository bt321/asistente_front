import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarDatosComponent } from './solicitar-datos.component';

describe('SolicitarDatosComponent', () => {
  let component: SolicitarDatosComponent;
  let fixture: ComponentFixture<SolicitarDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolicitarDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
