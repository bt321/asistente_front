import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescansosComponent } from './descansos.component';

describe('DescansosComponent', () => {
  let component: DescansosComponent;
  let fixture: ComponentFixture<DescansosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescansosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescansosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
