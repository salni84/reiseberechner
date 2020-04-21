import { TestBed } from '@angular/core/testing';

import { HttpClientService } from './http-client.service';
import { Reisen} from "../reisen/reisen.component";
import { Reise} from "../Reise";
import {of} from "rxjs";
import {inject} from "@angular/core";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import * as http from "http";

describe('HttpClientService', () => {

  let httpMock: HttpTestingController;
  let service: HttpClientService;

  const expectedTrips: Reise[] = [
    {
      id: 1,
      destination: "Bern",
      preis: 120,
      datum: "12-12-2020"
    },
    {
      id: 2,
      destination: "Olten",
      preis: 90,
      datum: "02-12-2019"
    },
  ];


  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClientService],
    });

    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(HttpClientService)

  });

  it('should GET a list of trips', () => {

    let receivedBooks: Reise[];
    service.getTrip().subscribe(b => receivedBooks = b);

    const req = httpMock.expectOne(
      'http://localhost:8080/reisen/');
    expect(req.request.method).toEqual('GET');

    req.flush(expectedTrips);

    expect(receivedBooks.length).toBe(2);
    expect(receivedBooks[0].destination).toBe("Bern");
    expect(receivedBooks[1].destination).toBe("Olten");

});

  afterEach(() => {
  httpMock.verify();
  });
});


