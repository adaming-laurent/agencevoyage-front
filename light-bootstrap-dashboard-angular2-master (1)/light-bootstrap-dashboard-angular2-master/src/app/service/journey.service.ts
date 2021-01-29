import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  private baseURL = "http://localhost:9090/journeys";
  constructor(private httpClient : HttpClient) { }
  
  public findAll(): Observable<any>{
    return this.httpClient.get(this.baseURL);
  }
  public findOne(id:number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }
  public save(journey:any): Observable<any>{
    console.log(journey);
    return this.httpClient.post(this.baseURL, journey);
  }
  public delete(id:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }
}
