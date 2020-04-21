import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TrafficLightComponent } from './traffic-light.component';


fdescribe('TrafficLightComponent', () => {
  let component: TrafficLightComponent = new TrafficLightComponent();
  let fixture: ComponentFixture<TrafficLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficLightComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should blink green traffic light', function () {
    component.gaVerh = -9;
    component.lights.isGreen = false;
    component.checkTrafficLight();
    fixture.detectChanges();

    expect(component.lights.isGreen).toBe(true);
    expect(component.lights.isRed).toBe(false);
    expect(component.lights.isYellow).toBe(false)
    expect(component.message).toBe("GA lohnt sich!")
  });

  it('should blink yellow traffic light', function () {
    component.gaVerh = -11;
    component.lights.isYellow = false;
    component.checkTrafficLight();
    fixture.detectChanges();

    expect(component.lights.isGreen).toBe(false);
    expect(component.lights.isRed).toBe(false);
    expect(component.lights.isYellow).toBe(true)
    expect(component.message).toBe("GA lohnt sich noch nicht ganz!")
  });


  it('should blink red traffic light', function () {
    component.gaVerh = -80;
    component.lights.isRed = false;
    component.checkTrafficLight();
    fixture.detectChanges();

    expect(component.lights.isGreen).toBe(false);
    expect(component.lights.isRed).toBe(true);
    expect(component.lights.isYellow).toBe(false)
    expect(component.message).toBe("GA lohnt sich aktuell nicht!")
  });
});
