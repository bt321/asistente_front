import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarpasswdComponent } from './recuperarpasswd.component';

describe('RecuperarpasswdComponent', () => {
  let component: RecuperarpasswdComponent;
  let fixture: ComponentFixture<RecuperarpasswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecuperarpasswdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecuperarpasswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
