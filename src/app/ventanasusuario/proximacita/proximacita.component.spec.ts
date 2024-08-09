import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximacitaComponent } from './proximacita.component';

describe('ProximacitaComponent', () => {
  let component: ProximacitaComponent;
  let fixture: ComponentFixture<ProximacitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProximacitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProximacitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
