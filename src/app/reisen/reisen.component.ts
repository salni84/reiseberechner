import {Component, DoCheck, OnChanges, OnInit, Pipe} from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import {Reise} from "../Reise";
import {Destination} from "../Destination";
import {element} from "protractor";


@Component({
  selector: 'app-employee',
  templateUrl: './reisen.component.html',
  styleUrls: ['./reisen.component.css']
})

  export class Reisen implements OnInit {

  reiseDetails: Reise = new Reise();

  reisen: Reise[];

  sumOfCost: number;

  gaRelations: number;

  zielort: Destination[];

  months: String[] = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

  filteredString = "";

  filtered;

  filteredDestination;


  constructor(private httpClientService:HttpClientService) {}

  ngOnInit() {
    this.httpClientService.getTrip().subscribe(response =>this.handleSuccessfulResponse(response));
    this.httpClientService.getReiseTotal().subscribe(data => this.sumOfCost = data);
    this.httpClientService.gaRelation().subscribe(data => this.gaRelations = data);
    this.httpClientService.getDestination().subscribe(res => this.zielort = res);
  }

/*  ngDoCheck(){
    this.getSelectedDropdown()
  }*/


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

  deleteTrip(id: number) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.httpClientService.deleteTrip(id).subscribe(data => {
        this.httpClientService.getTrip().subscribe(response =>this.handleSuccessfulResponse(response));
        window.location.reload();
      });
    }
  }

/*  getSelectedDropdown(){
    this.filtered = this.reisen.filter((reisen) => this.isMatch(reisen));
  }

  private isMatch(item) {
    if(item instanceof Object){
      return Object.keys(item).some((k) => this.isMatch(item[k]));
    }else {
      return item.toString().indexOf(this.filteredString) > -1;
    }
  }*/

  getSum() {
    return this.reisen.map(t => t.preis).reduce((a, b) => a + b, 0);
  }

  getDestinationFiltered(destination:any){
    this.httpClientService.getTripByDestination(destination).subscribe(data => this.reisen = data)
  }
}
