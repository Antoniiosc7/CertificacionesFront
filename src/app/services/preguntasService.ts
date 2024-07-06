import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pregunta } from '../models/pregunta.model';
import {API_URL} from "../../config";

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  // Ajusta la ruta al lugar correcto donde se encuentra el archivo JSON en tu proyecto
  private jsonUrl = 'assets/test.json';

  constructor(private http: HttpClient) { }

  obtenerPreguntas(): Observable<any> {
    const httpOptions = this.getHttpOptions();

    // Utiliza HttpClient para obtener el contenido del archivo JSON
    return this.http.get<any>(`${API_URL}/api/examenes/respuesta`, httpOptions);
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
