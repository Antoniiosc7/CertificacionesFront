import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../../../models/pregunta.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { LoadingSpinnerComponent } from '../../../component/loading-spinner/loading-spinner.component';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-preguntas',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    LoadingSpinnerComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  preguntas: Pregunta[] = [];
  preguntaForm: FormGroup;
  loading = true;
  examenId!: number;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private route: ActivatedRoute
  ) {
    this.preguntaForm = this.fb.group({
      pregunta: ['', Validators.required],
      codigo: [''],
      opcion1: ['', Validators.required],
      opcion2: ['', Validators.required],
      opcion3: [''],
      opcion4: [''],
      respuestasCorrectas: ['', Validators.required],
      explicacion: ['']
    });
  }

  ngOnInit(): void {
    this.examenId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.examenId)
    this.loadPreguntas();
  }

  loadPreguntas(): void {
    this.adminService.getPreguntasByExamenId(this.examenId).subscribe((preguntas: Pregunta[]) => {
      this.preguntas = preguntas;
      this.loading = false;
    });
  }

  createPregunta(): void {
    if (this.preguntaForm.valid) {
      const newPregunta: Pregunta = {
        ...this.preguntaForm.value,
        respuestasCorrectas: this.preguntaForm.value.respuestasCorrectas.split(',').map((resp: string) => resp.trim()),
        examen: { examenId: Number(this.examenId), chapter: '', nombre: '', descripcion: '' }
      };
      this.adminService.createPreguntaForExamen(this.examenId, newPregunta).subscribe((pregunta: Pregunta) => {
        this.preguntas.push(pregunta);
        this.preguntaForm.reset();
      });
    }
  }

  deletePregunta(preguntaId: number): void {
    this.adminService.deletePregunta(preguntaId).subscribe(() => {
      this.preguntas = this.preguntas.filter(p => p.id !== preguntaId);
    });
  }

  goBack(): void {
    window.history.back();
  }
}
