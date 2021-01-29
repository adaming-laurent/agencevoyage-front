import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrainRideService {


  private baseURL = "http://localhost:9090/trainRides";
  constructor(private httpClient : HttpClient) { }
  
  public findAll(): Observable<any>{
    return this.httpClient.get(this.baseURL);
  }
  public findOne(id:number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }
  public save(trainRide:any): Observable<any>{
    console.log(trainRide);
    return this.httpClient.post(this.baseURL, trainRide);
  }
  public delete(id:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }
}
