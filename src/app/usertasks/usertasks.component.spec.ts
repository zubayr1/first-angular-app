import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertasksComponent } from './usertasks.component';

describe('UsertasksComponent', () => {
  let component: UsertasksComponent;
  let fixture: ComponentFixture<UsertasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsertasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsertasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
