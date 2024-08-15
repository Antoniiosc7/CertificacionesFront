import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Examen } from '../models/examen.model';
import {API_URL} from "../../config";
import {Pregunta} from "../models/pregunta.model";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = `${API_URL}/api/admin/examenes`;
  private urlAPI = `${API_URL}/api/admin`;
  constructor(private http: HttpClient) {}

  getAllExamenes(): Observable<Examen[]> {
    return this.http.get<Examen[]>(this.apiUrl, this.getHttpOptions());
  }

  getPreguntasByExamenId(examenId: number): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(`${this.apiUrl}/${examenId}/preguntas`);
  }

  createPreguntaForExamen(examenId: number, pregunta: Pregunta): Observable<Pregunta> {
    return this.http.post<Pregunta>(`${this.urlAPI}/examenes/${examenId}/preguntas`, pregunta);
  }

  deletePregunta(preguntaId: number): Observable<void> {
    return this.http.delete<void>(`${this.urlAPI}/preguntas/${preguntaId}`);
  }

  createExamen(examen: Examen): Observable<Examen> {
    return this.http.post<Examen>(this.apiUrl, examen,this.getHttpOptions());
  }
  deleteExamen(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
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
