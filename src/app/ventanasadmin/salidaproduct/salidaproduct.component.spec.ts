import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaproductComponent } from './salidaproduct.component';

describe('SalidaproductComponent', () => {
  let component: SalidaproductComponent;
  let fixture: ComponentFixture<SalidaproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalidaproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalidaproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
