import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseURL = "http://localhost:9090/customers";
  constructor(private httpClient : HttpClient) { }
  
  public findAll(): Observable<any>{
    return this.httpClient.get(this.baseURL);
  }
  public findOne(id:number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }
  public save(customer:any): Observable<any>{
    console.log(customer);
    return this.httpClient.post(this.baseURL, customer);
  }
  public delete(id:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }
}
