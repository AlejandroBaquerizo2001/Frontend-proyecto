import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdquiridoproductComponent } from './adquiridoproduct.component';

describe('AdquiridoproductComponent', () => {
  let component: AdquiridoproductComponent;
  let fixture: ComponentFixture<AdquiridoproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdquiridoproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdquiridoproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
