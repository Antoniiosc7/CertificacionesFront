import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_URL} from "../../config";


@Injectable({
  providedIn: 'root'
})
export class LogService {
  private logUrl = `${API_URL}/api/express/log`;
  private startUrl = `${API_URL}/api/express/start`;
  private stopUrl = `${API_URL}/api/express/stop`;

  constructor(private http: HttpClient) { }

  getLog(): Observable<string> {
    const httpOptions = this.getHttpOptions();
    return this.http.get(this.logUrl, httpOptions);
  }

  startServer(): Observable<string> {
    const httpOptions = this.getHttpOptions();
    return this.http.get(this.startUrl, httpOptions);
  }

  stopServer(): Observable<string> {
    const httpOptions = this.getHttpOptions();
    return this.http.get(this.stopUrl, httpOptions);
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      }),
      responseType: 'text' as 'text'
    };
  }
}
