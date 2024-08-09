import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoproductComponent } from './ingresoproduct.component';

describe('IngresoproductComponent', () => {
  let component: IngresoproductComponent;
  let fixture: ComponentFixture<IngresoproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresoproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngresoproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
