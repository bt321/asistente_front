import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswdComponent } from './passwd.component';

describe('PasswdComponent', () => {
  let component: PasswdComponent;
  let fixture: ComponentFixture<PasswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
