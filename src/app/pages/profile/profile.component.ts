import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/authService";
import { ActivatedRoute } from "@angular/router";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import { ResultadoService } from "../../services/resultadoService"; // Adjust the path as needed
import { ExamenService } from "../../services/examen.service"; // Adjust the path as needed
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgIf,
    DatePipe,
    NgForOf,
    MatTableModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  resultadosConDetalles: any[] = [];
  displayedColumns: string[] = ['capituloExamen', 'nombreExamen', 'resultado', 'fechaDeInicio', 'fechaFin'];

  constructor(
    private authService: AuthService,
    private resultadoService: ResultadoService,
    private examenService: ExamenService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const username = localStorage.getItem('username');
    const id = localStorage.getItem('idUser');
    this.loadUserExamResults(Number(id)); // Assuming `id` is available in user data

    if (username) {
      this.authService.getUserProfile(username).subscribe({
        next: (data) => {
          this.user = data;
        },
        error: (e) => console.error(e)
      });
    }
  }

  loadUserExamResults(userId: number): void {
    combineLatest([
      this.resultadoService.getResultadosByUserId(userId),
      this.examenService.getAllExamenes()
    ]).pipe(
      map(([resultados, examenes]) => {
        return resultados.map((resultado:any) => {
          const examenInfo = examenes.find(examen => examen.examenId === resultado.examenId);
          return {

            ...resultado,
            nombreExamen: examenInfo ? examenInfo.nombre : 'Desconocido',
            capituloExamen: examenInfo ? examenInfo.chapter : 'Desconocido'

          };
        });
      })
    ).subscribe(resultadosConDetalles => {
      this.resultadosConDetalles = resultadosConDetalles;
    });
  }
}
