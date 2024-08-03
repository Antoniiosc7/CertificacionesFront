import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_URL} from "../../config";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = `${API_URL}/api`;

  constructor(private http: HttpClient) { }

  getCerts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/certificaciones`, this.getHttpOptions());
  }

  getDocsByCert(certId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/certificaciones/${certId}/docs`, this.getHttpOptions());
  }

  getMenuByCert(certId: string | null): Observable<any> {
    return this.http.get(`${this.baseUrl}/certificaciones/${certId}/menu`, this.getHttpOptions());
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      })
    };
  }
}
