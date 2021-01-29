import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiverCruiseService {

  private baseURL = "http://localhost:9090/riverCruises";
  constructor(private httpClient : HttpClient) { }
  
  public findAll(): Observable<any>{
    return this.httpClient.get(this.baseURL);
  }
  public findOne(id:number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }
  public save(riverCruise:any): Observable<any>{
    console.log(riverCruise);
    return this.httpClient.post(this.baseURL, riverCruise);
  }
  public delete(id:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }
}
