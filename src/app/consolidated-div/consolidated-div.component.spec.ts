import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidatedDivComponent } from './consolidated-div.component';

describe('ConsolidatedDivComponent', () => {
  let component: ConsolidatedDivComponent;
  let fixture: ComponentFixture<ConsolidatedDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolidatedDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidatedDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
