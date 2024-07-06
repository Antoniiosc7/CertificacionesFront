import { Component, OnInit } from '@angular/core';
import { Pregunta } from "../../../models/pregunta.model";
import { PreguntasService } from "../../../services/preguntasService";
import {CommonModule, NgClass} from "@angular/common";

@Component({
  selector: 'app-examen',
  standalone: true,
  imports: [
    NgClass,
    CommonModule
  ],
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
  preguntas: Pregunta[] = [];
  respuestasUsuario: { [key: number]: string[] } = {};
  mostrarResultados: boolean = false;
  puntuacion: number = 0;
  timeLeft: number = 1800;
  interval!: ReturnType<typeof setInterval>;
  constructor(private preguntasService: PreguntasService) { }

  ngOnInit(): void {
    this.preguntasService.obtenerPreguntas().subscribe(data => {
      this.preguntas = data;
    });
    this.startTimer(); // Asegúrate de llamar a startTimer en ngOnInit para iniciar el contador.
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.finalizarCuestionario();
      }
    }, 1000);
  }

  formatTime(time: number): string {
    const minutes: number = Math.floor(time / 60);
    const seconds: number = time - minutes * 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  seleccionarRespuesta(preguntaId: number, opcionSeleccionada: string): void {
    if (!this.respuestasUsuario[preguntaId]) {
      this.respuestasUsuario[preguntaId] = [];
    }
    const index = this.respuestasUsuario[preguntaId].indexOf(opcionSeleccionada);
    if (index > -1) {
      this.respuestasUsuario[preguntaId].splice(index, 1); // Remove if already selected
    } else {
      this.respuestasUsuario[preguntaId].push(opcionSeleccionada); // Add if not selected
    }
  }

  finalizarCuestionario(): void {
    this.puntuacion = 0; // Reset score
    this.preguntas.forEach(pregunta => {
      const respuestasCorrectas = pregunta.respuestasCorrectas;
      const respuestasDelUsuario = this.respuestasUsuario[pregunta.id] || [];
      if (respuestasCorrectas.sort().toString() === respuestasDelUsuario.sort().toString()) {
        this.puntuacion += 1; // Increment score for each correct answer
      }
    });
    this.mostrarResultados = true;
  }


}
