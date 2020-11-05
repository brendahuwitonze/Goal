import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalDetailedComponent } from './goal-detail.component';

describe('GoalDetailedComponent', () => {
  let component: GoalDetailedComponent;
  let fixture: ComponentFixture<GoalDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalDetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
