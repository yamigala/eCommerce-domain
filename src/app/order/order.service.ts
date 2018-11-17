/**
 * @author Yamini Gala
 */

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

//------------------------------------------------------//

import { order } from "./order.model";

@Injectable()
export class OrderService {
  /**
   * url for web-api
   */
  public orderUrl = "api/order";
  /**
   *
   * @param http :injecting HttpClient
   */
  constructor(private http: HttpClient) {}
  /**
   * get data from server
   */
  public getData(): Observable<order[]> {
    return this.http.get<order[]>(this.orderUrl);
  }
  /**
   * delete data from database
   */
  public delete(id: number): Observable<order> {
    return this.http.delete<order>(this.orderUrl + "/" + id);
  }
  /**
   *add data in database
   */
  public addOrder(order): Observable<order[]> {
    return this.http.post<order[]>(this.orderUrl, order);
  }
  /**
   *edit data in database
   */
  public editData(id: number): Observable<order> {
    return this.http.get<order>(this.orderUrl + id);
  }
  /**
   *used for edtting data using id
   */
  public getDataById(id): Observable<order[]> {
    return this.http.get<order[]>(this.orderUrl + "/" + id);
  }
  /**
   * update data in database
   */
  public updateOrder(id): Observable<order> {
    console.log(id);
    
    return this.http.put<order>(this.orderUrl,id);
  }
}
