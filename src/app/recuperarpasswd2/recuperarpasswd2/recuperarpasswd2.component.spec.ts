import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recuperarpasswd2Component } from './recuperarpasswd2.component';

describe('Recuperarpasswd2Component', () => {
  let component: Recuperarpasswd2Component;
  let fixture: ComponentFixture<Recuperarpasswd2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Recuperarpasswd2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Recuperarpasswd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
