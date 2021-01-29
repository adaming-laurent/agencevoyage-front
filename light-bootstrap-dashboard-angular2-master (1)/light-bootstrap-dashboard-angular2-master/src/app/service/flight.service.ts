import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private baseURL = "http://localhost:9090/flights";
  constructor(private httpClient : HttpClient) { }
  
  public findAll(): Observable<any>{
    return this.httpClient.get(this.baseURL);
  }
  public findOne(id:number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }
  public save(flight:any): Observable<any>{
    console.log(flight);
    return this.httpClient.post(this.baseURL, flight);
  }
  public delete(id:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }
}
