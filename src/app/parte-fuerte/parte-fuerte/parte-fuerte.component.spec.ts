import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteFuerteComponent } from './parte-fuerte.component';

describe('ParteFuerteComponent', () => {
  let component: ParteFuerteComponent;
  let fixture: ComponentFixture<ParteFuerteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParteFuerteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParteFuerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
