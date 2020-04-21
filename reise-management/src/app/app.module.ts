import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Reisen} from "./reisen/reisen.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ChartComponent } from './chart/chart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { NavbarComponent } from './navbar/navbar.component';
import { SbbPageComponent } from './sbb-page/sbb-page.component';
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { TrafficLightComponent } from './traffic-light/traffic-light.component';



@NgModule({
  declarations: [
    AppComponent,
    Reisen,
    ChartComponent,
    NavbarComponent,
    SbbPageComponent,
    TrafficLightComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgApexchartsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
