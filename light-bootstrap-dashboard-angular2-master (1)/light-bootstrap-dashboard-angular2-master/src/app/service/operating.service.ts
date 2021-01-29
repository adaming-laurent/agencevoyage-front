import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperatingService {
  private baseURL = "http://localhost:9090/operatings"
  constructor(private httpClient : HttpClient) { }

  public findAllOperatings(): Observable<any>{
    return this.httpClient.get(this.baseURL);
  }
  public findOneOperating(idOperating:number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+idOperating)
  }
  public saveOperating(operating:any): Observable<any>{
    return this.httpClient.post(this.baseURL, operating);
  }
  public deleteOperating(idOperating:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+idOperating);
  }
}
