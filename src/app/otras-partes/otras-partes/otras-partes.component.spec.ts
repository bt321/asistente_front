import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrasPartesComponent } from './otras-partes.component';

describe('OtrasPartesComponent', () => {
  let component: OtrasPartesComponent;
  let fixture: ComponentFixture<OtrasPartesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtrasPartesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtrasPartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
