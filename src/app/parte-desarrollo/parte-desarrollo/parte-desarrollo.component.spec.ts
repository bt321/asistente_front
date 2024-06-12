import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteDesarrolloComponent } from './parte-desarrollo.component';

describe('ParteDesarrolloComponent', () => {
  let component: ParteDesarrolloComponent;
  let fixture: ComponentFixture<ParteDesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParteDesarrolloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParteDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
