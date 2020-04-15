import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reise } from './reisen.component';

describe('EmployeeComponent', () => {
  let component: Reise;
  let fixture: ComponentFixture<Reise>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reise ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
