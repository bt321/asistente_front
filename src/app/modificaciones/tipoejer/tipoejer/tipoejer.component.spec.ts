import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoejerComponent } from './tipoejer.component';

describe('TipoejerComponent', () => {
  let component: TipoejerComponent;
  let fixture: ComponentFixture<TipoejerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoejerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoejerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
