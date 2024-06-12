import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusculosentrenoComponent } from './musculosentreno.component';

describe('MusculosentrenoComponent', () => {
  let component: MusculosentrenoComponent;
  let fixture: ComponentFixture<MusculosentrenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusculosentrenoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusculosentrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
