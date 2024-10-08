import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Examen } from '../models/examen.model';
import {API_URL} from "../../config";

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  private baseUrl = `${API_URL}/api/examenes`;

  constructor(private http: HttpClient) { }

  getAllExamenes(): Observable<Examen[]> {
    return this.http.get<Examen[]>(this.baseUrl, this.getHttpOptions());
  }

  getExamenByCertId(certId: string | null): Observable<Examen[]> {
    const url = `${this.baseUrl}/${certId}`;
    return this.http.get<Examen[]>(url, this.getHttpOptions());
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
