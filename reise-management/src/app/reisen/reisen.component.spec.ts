import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Reise} from "../Reise";
import {Reisen} from "./reisen.component";
import {TrafficLightComponent} from "../traffic-light/traffic-light.component";
import {By} from "protractor";



describe('ReiseComponent', () => {
  let fixture;
  let component;
  let element;
  let de;


/*  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reisen]
    })
      .compileComponents();
  }));*/


  beforeEach(() => {
    fixture = TestBed.createComponent(Reisen);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    de = fixture.debugElement;
});

/*  it('should render Swisscom Reisecalculator', async (()=> {

    component.name = 'Swisscom Reisecalculator';
    fixture.detectChanges();
    fixture.whenStable().toString(() => {
      expect(element.querySelector('h1').innerText).toBe('Swisscom Reisecalculator');
      expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Swisscom Reisecalculator');
    });
  }));*/

});
