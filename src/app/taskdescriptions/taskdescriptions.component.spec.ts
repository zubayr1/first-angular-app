import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdescriptionsComponent } from './taskdescriptions.component';

describe('TaskdescriptionsComponent', () => {
  let component: TaskdescriptionsComponent;
  let fixture: ComponentFixture<TaskdescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskdescriptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskdescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
