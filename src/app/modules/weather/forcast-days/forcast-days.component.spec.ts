import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcastDaysComponent } from './forcast-days.component';

describe('ForcastDaysComponent', () => {
  let component: ForcastDaysComponent;
  let fixture: ComponentFixture<ForcastDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForcastDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcastDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
