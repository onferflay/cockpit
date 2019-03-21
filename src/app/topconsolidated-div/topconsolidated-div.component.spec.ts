import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopconsolidatedDivComponent } from './topconsolidated-div.component';

describe('TopconsolidatedDivComponent', () => {
  let component: TopconsolidatedDivComponent;
  let fixture: ComponentFixture<TopconsolidatedDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopconsolidatedDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopconsolidatedDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
