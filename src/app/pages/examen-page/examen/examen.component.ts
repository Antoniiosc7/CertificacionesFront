import {Component, OnDestroy, OnInit} from '@angular/core';
import { Pregunta } from "../../../models/pregunta.model";
import { PreguntasService } from "../../../services/preguntasService";
import { CommonModule, NgClass } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { ResultadoService } from "../../../services/resultadoService";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {MatDialog} from "@angular/material/dialog";
import {ExamenPopUpComponent} from "./examen-pop-up/examen-pop-up.component";

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
export class ExamenComponent implements OnInit, OnDestroy {
  preguntas: Pregunta[] = [];
  respuestasUsuario: { [key: number]: string[] } = {};
  mostrarResultados: boolean = false;
  puntuacion: number = 0;
  timeLeft: number = 1800;
  interval!: ReturnType<typeof setInterval>;
  fechaDeInicio!: Date;
  examenNombre: string | null = '';
  examenFinalizado: boolean = false;

  constructor(
    private preguntasService: PreguntasService,
    private resultadoService: ResultadoService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fechaDeInicio = new Date();
    this.examenNombre = sessionStorage.getItem('examenNombre');
    const examenId = this.route.snapshot.paramMap.get('id');
    if (examenId) {
      this.preguntasService.obtenerPreguntas(examenId).subscribe(preguntas => {
        this.preguntas = preguntas.map(pregunta => ({
          ...pregunta,
          opciones: [
            pregunta.opcion1, pregunta.opcion2, pregunta.opcion3, pregunta.opcion4, pregunta.opcion5,
            pregunta.opcion6, pregunta.opcion7, pregunta.opcion8, pregunta.opcion9, pregunta.opcion10
          ].filter((opcion): opcion is string => opcion !== null && opcion?.trim() !== '') as string[],
          respuestasCorrectas: typeof pregunta.respuestasCorrectas === 'string' ? JSON.parse(pregunta.respuestasCorrectas) : pregunta.respuestasCorrectas
        }));
      });
    }
    this.startTimer();
  }

  getOpcionLetra(index: number): string {
    return String.fromCharCode(65 + index);
  }

  getFilteredOpciones(pregunta: any): string[] {
    return pregunta.opciones.filter((opcion: string) => opcion && opcion.trim() !== '');
  }

  seleccionarRespuesta(preguntaId: number, opcionLetra: string, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const isChecked = inputElement.checked;

    if (!this.respuestasUsuario[preguntaId]) {
      this.respuestasUsuario[preguntaId] = [];
    }
    if (isChecked) {
      this.respuestasUsuario[preguntaId].push(opcionLetra);
    } else {
      const index = this.respuestasUsuario[preguntaId].indexOf(opcionLetra);
      if (index > -1) {
        this.respuestasUsuario[preguntaId].splice(index, 1);
      }
    }
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

  esRespuestaCorrecta(pregunta: any): boolean {
    const respuestasUsuario = this.respuestasUsuario[pregunta.id] || [];
    const respuestasCorrectas = pregunta.respuestasCorrectas;
    return respuestasCorrectas.length === respuestasUsuario.length &&
      respuestasUsuario.every(respuesta => respuestasCorrectas.includes(respuesta)) &&
      respuestasCorrectas.every((respuesta: any) => respuestasUsuario.includes(respuesta));
  }

  finalizarCuestionario(): void {
    this.mostrarResultados = true;
    this.examenFinalizado = true;
    this.puntuacion = 0;
    this.preguntas.forEach(pregunta => {
      if (this.esRespuestaCorrecta(pregunta)) {
        this.puntuacion += 1;
      }
    });

    const userIdStr = localStorage.getItem('idUser');
    const examenIdStr = this.route.snapshot.paramMap.get('id');
    const userId = userIdStr ? parseInt(userIdStr) : 0;
    const examenId = examenIdStr ? parseInt(examenIdStr) : 0;

    const resultado = {
      userId: userId,
      examenId: examenId,
      resultado: this.puntuacion,
      fechaDeInicio: this.fechaDeInicio,
      fechaFin: new Date()
    };

    this.resultadoService.saveResultado(resultado).subscribe({
      next: (response) => {
        this.openResultDialog();
      },
      error: (error) => {
        console.error('Error al guardar el resultado', error);
      }
    });
  }

  parseTableData(codigo: string): string[][] {
    const tableString = codigo.replace('tabla =', '').trim();
    const rows = tableString.slice(2, -2).split('], [');
    return rows.map(row => row.split(',').map(cell => cell.trim() === 'null' ? '' : cell.trim()));
  }

  parseImageUrl(codigo: string): SafeUrl {
    const url = codigo.replace('img =', '').trim().replace(/^"|"$/g, '');
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  processPreguntaText(text: string): string {
    return text.replace(/\r\n/g, '<br>');
  }
  ngOnDestroy(): void {
    sessionStorage.removeItem('examenNombre');
  }


  openResultDialog(): void {
    const tiempo = (new Date().getTime() - this.fechaDeInicio.getTime()) / 1000;
    this.dialog.open(ExamenPopUpComponent, {
      data: {
        puntuacion: this.puntuacion,
        tiempo: tiempo
      }
    });
  }
}
