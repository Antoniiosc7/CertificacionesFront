import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Examen } from '../models/examen.model'; // Ajusta la ruta según donde coloques el modelo

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  private baseUrl = 'http://localhost:8080/api/examenes'; // Ajusta según tu configuración

  constructor(private http: HttpClient) { }

  getAllExamenes(): Observable<Examen[]> {
    return this.http.get<Examen[]>(this.baseUrl, this.getHttpOptions());
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
