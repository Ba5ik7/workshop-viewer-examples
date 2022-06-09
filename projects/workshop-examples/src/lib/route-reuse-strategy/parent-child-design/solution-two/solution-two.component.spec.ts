import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionTwoComponent } from './solution-two.component';

describe('SolutionTwoComponent', () => {
  let component: SolutionTwoComponent;
  let fixture: ComponentFixture<SolutionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
