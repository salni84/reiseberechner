import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbbPageComponent } from './sbb-page.component';

describe('SbbPageComponent', () => {
  let component: SbbPageComponent;
  let fixture: ComponentFixture<SbbPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbbPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbbPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
