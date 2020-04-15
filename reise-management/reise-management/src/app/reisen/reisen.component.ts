import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import {Observable} from "rxjs";
import {Reise} from "../Reise";



@Component({
  selector: 'app-employee',
  templateUrl: './reisen.component.html',
  styleUrls: ['./reisen.component.css']
})


  export class Reisen implements OnInit{

  reiseDetails: Reise = new Reise();

  reisen: Observable<Reisen[]>;

  value = new Date();

  sumOfCost: number;

  gaRelations: number;

  zielort: string;


  constructor(private httpClientService:HttpClientService) {
  }

  ngOnInit() {
    this.httpClientService.getTrip().subscribe(response =>this.handleSuccessfulResponse(response));
    this.httpClientService.getReiseTotal().subscribe(data => this.sumOfCost = data);
    this.httpClientService.gaRelation().subscribe(data => this.gaRelations = data);
    this.httpClientService.getDestination().subscribe(res => this.zielort = res)
  }


  handleSuccessfulResponse(response) {
    this.reisen=response;
  }

  enterReise() {
    this.httpClientService.newTrip(this.reiseDetails).subscribe(reiseDetails =>
      console.log(reiseDetails), error => console.log(error));
    this.reiseDetails = new Reise();
   window.location.reload()
  }


  deleteEmployee(nr: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.httpClientService.deleteEmployee(nr).subscribe(data => {
        this.httpClientService.getTrip().subscribe(response =>this.handleSuccessfulResponse(response));
      });
    }
  }



}
