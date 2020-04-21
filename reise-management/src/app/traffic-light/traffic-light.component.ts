import {Component, Input, OnInit} from '@angular/core';
import {Lights} from "../lights";


@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.scss']
})
export class TrafficLightComponent  {

  @Input() gaVerh: number;

  public lights: Lights = {
    isRed: false,
    isYellow: false,
    isGreen: false
  };

  message: string;

  checkTrafficLight(){
    if (this.gaVerh > -10){
      this.lights.isGreen = true;
      this.lights.isYellow = false;
      this.lights.isRed = false;
      this.message = "GA lohnt sich!"
    }
   else if (this.gaVerh < -10 && this.gaVerh > -30){
      this.lights.isYellow = true;
      this.lights.isGreen = false;
      this.lights.isRed = false;
      this.message = "GA lohnt sich noch nicht ganz!"
    }
    else if (this.gaVerh < -30){
      this.lights.isRed = true;
      this.lights.isGreen = false;
      this.lights.isYellow = false;
      this.message = "GA lohnt sich aktuell nicht!"
    }
  }
}
