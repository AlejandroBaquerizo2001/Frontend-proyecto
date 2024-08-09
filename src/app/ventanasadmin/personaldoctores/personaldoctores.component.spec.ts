import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaldoctoresComponent } from './personaldoctores.component';

describe('PersonaldoctoresComponent', () => {
  let component: PersonaldoctoresComponent;
  let fixture: ComponentFixture<PersonaldoctoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaldoctoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonaldoctoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
