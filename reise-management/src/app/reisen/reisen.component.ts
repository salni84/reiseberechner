import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClientService } from '../service/http-client.service';
import {Reise} from "../Reise";
import {Destination} from "../Destination";



@Component({
  selector: 'app-employee',
  templateUrl: './reisen.component.html',
  styleUrls: ['./reisen.component.css']
})

  export class Reisen implements OnInit {

  reiseDetails: Reise = new Reise();

  reisen: Reise[];

  gaPreis = 5265;

  gaVerh = 0;

  zielort: Destination[];

  months: any[] = ["Januar", "Februar", "März", "April", 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

  filteredDestination;

  constructor(private httpClientService:HttpClientService) {}

  ngOnInit() {
    this.httpClientService.getTrip().subscribe(response =>this.handleSuccessfulResponse(response));
    this.httpClientService.getDestination().subscribe(res => this.zielort = res);
  }

  getSingleTrip(){
    this.httpClientService.getTripById(this.reiseDetails.id).subscribe(reiseDetails =>
    console.log(reiseDetails), error => console.log(error));
  }

  handleSuccessfulResponse(response) {
    this.reisen=response;
  }

  enterReise() {
    this.httpClientService.newTrip(this.reiseDetails).subscribe(reiseDetails =>
      console.log(reiseDetails), error => console.log(error));
    this.reiseDetails = new Reise();
   window.location.reload();
  }

  deleteFilter(){
    this.httpClientService.getTrip().subscribe(response =>this.reisen = response);
  }

  deleteTrip(id: number) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.httpClientService.deleteTrip(id).subscribe(data => {
        this.httpClientService.getTrip().subscribe(response =>this.handleSuccessfulResponse(response));
        window.location.reload();
      });
    }
  }

  getSum() {
    return this.reisen.map(t => t.preis).reduce((a, b) => a + b, 0);
  }

  getDestinationFiltered(destination:any){
    this.httpClientService.getTripByDestination(destination).subscribe(data => this.reisen = data)
  }


  gaRelation():string{
   this.gaVerh = (this.getSum()*100/this.gaPreis)-100;
   return this.gaVerh.toFixed(2)
  }

  getMonth(monat:any){
    this.httpClientService.getMonth(monat).subscribe(data => this.reisen = data)
  }
}
