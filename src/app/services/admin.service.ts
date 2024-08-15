import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Examen } from '../models/examen.model';
import {API_URL} from "../../config";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = `${API_URL}/api/admin/examenes`;

  constructor(private http: HttpClient) {}

  getAllExamenes(): Observable<Examen[]> {
    return this.http.get<Examen[]>(this.apiUrl, this.getHttpOptions());
  }

  createExamen(examen: Examen): Observable<Examen> {
    return this.http.post<Examen>(this.apiUrl, examen,this.getHttpOptions());
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
