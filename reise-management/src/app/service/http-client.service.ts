import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Reisen} from "../reisen/reisen.component";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Reise} from "../Reise";
import {Destination} from "../Destination";


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http:HttpClient) {}

  apiURL = 'http://localhost:8080';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getTrip(monat?:String): Observable<Reise[]>{
      return this.http.get<Reise[]>(this.apiURL + '/reisen');
  }

  getTripById(id: number): Observable<Reise>{
    return this.http.get<Reise>(this.apiURL + '/reisen/' + id )
  }

  getTripByDestination(destination:String){
    return this.http.get<Reise[]>(this.apiURL + '/reisen/ort/' + destination)
  }

  newTrip(reiseDetails: Reise): Observable<Reisen> {
    return this.http.post<Reisen>(this.apiURL + '/reisen',  reiseDetails,  this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


  deleteTrip(id): Observable<Reisen> {
    return this.http.delete<Reisen>(this.apiURL + '/reisen/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  getDestination(): Observable<Destination[]> {
    return this.http.get<Destination[]>(this.apiURL + '/reisen/destinations')
      .pipe(
        catchError(this.handleError)
      );
  }
}
