import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Reisen} from "../reisen/reisen.component";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Reise} from "../Reise";


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http:HttpClient) {}

  apiURL = 'http://localhost:9000';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getTrip(): Observable<Reise[]>{
      return this.http.get<Reise[]>(this.apiURL + '/reisen');
  }

  getReiseTotal(): Observable<number> {
    return this.http.get<number>(this.apiURL + '/reisen/v1')
  }

  newTrip(reiseDetails: Reise): Observable<Reisen> {
    return this.http.post<Reisen>(this.apiURL + '/reisen',  reiseDetails, this.httpOptions)
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


  deleteEmployee(nr) {
    return this.http.delete<Reisen>(this.apiURL + '/reisen/' + nr, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  gaRelation(): Observable<number> {
    return this.http.get<number>(this.apiURL + '/reisen/v2')
  }

  getDestination(): Observable<string> {
    return this.http.get<string>(this.apiURL + '/reisen/destinations')
      .pipe(
        catchError(this.handleError)
      );
  }
}
