import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyDivComponent } from './weekly-div.component';

describe('WeeklyDivComponent', () => {
  let component: WeeklyDivComponent;
  let fixture: ComponentFixture<WeeklyDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
