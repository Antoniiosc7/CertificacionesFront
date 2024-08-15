import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Examen } from '../../../models/examen.model';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Certificaciones } from '../../../models/certificaciones.model';
import {NgForOf, NgIf} from '@angular/common';
import { LoadingSpinnerComponent } from '../../../component/loading-spinner/loading-spinner.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-examenes',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    LoadingSpinnerComponent,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './examenes.component.html',
  styleUrl: './examenes.component.css'
})
export class ExamenesComponent implements OnInit {
  examenes: Examen[] = [];
  certificaciones: Certificaciones[] = [];
  examenForm: FormGroup;
  loading: boolean = true;

  constructor(
    private adminService: AdminService,
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router)
  {
    this.examenForm = this.fb.group({
      chapter: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      certificacion: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadExamenes();
    this.loadCertificaciones();
  }

  loadExamenes(): void {
    this.adminService.getAllExamenes().subscribe((data: Examen[]) => {
      this.examenes = data;
      this.checkLoading();
    });
  }

  loadCertificaciones(): void {
    this.apiService.getCerts().subscribe((data: Certificaciones[]) => {
      this.certificaciones = data;
      this.checkLoading();
    });
  }

  checkLoading(): void {
    if (this.examenes.length > 0 && this.certificaciones.length > 0) {
      this.loading = false;
    }
  }

  createExamen(): void {
    if (this.examenForm.valid) {
      const newExamen: Examen = {
        ...this.examenForm.value,
        certificacion: this.examenForm.value.certificacion
      };
      this.adminService.createExamen(newExamen).subscribe((examen: Examen) => {
        this.examenes.push(examen);
        this.examenForm.reset();
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/admin']);
  }
}
