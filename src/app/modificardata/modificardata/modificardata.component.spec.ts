import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificardataComponent } from './modificardata.component';

describe('ModificardataComponent', () => {
  let component: ModificardataComponent;
  let fixture: ComponentFixture<ModificardataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificardataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificardataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
