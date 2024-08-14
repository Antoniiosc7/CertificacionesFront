import {AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { AuthService } from "../../services/authService";
import { ActivatedRoute } from "@angular/router";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import { ResultadoService } from "../../services/resultadoService";
import {combineLatest, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator} from "@angular/material/paginator";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatInput} from "@angular/material/input";
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule, MatOption} from "@angular/material/core";
import {FormsModule} from "@angular/forms";
import {MatSelect} from "@angular/material/select";
import {MatButton} from "@angular/material/button";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {LoadingSpinnerComponent} from "../../component/loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgIf,
    DatePipe,
    NgForOf,
    MatTableModule,
    MatPaginator,
    MatFormField,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatInput,
    MatLabel,
    FormsModule,
    MatSelect,
    MatOption,
    MatButton,
    MatProgressSpinner,
    LoadingSpinnerComponent
  ],
  providers: [ {provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  user: any;
  loading: boolean = false;
  filterChapter: string = '';
  startDateFilter: Date | null = null;
  endDateFilter: Date | null = null;
  selectedChapter: string | null = null;
  selectedExam: string | null = null;
  selectedCertification: string | null = null;
  resultadosConDetalles = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['certificacionNombre', 'nombreExamen', 'capituloExamen',  'resultado', 'fechaDeInicio'];
  @ViewChild('picker1') datePicker1!: MatDatepicker<Date>;
  @ViewChild('picker2') datePicker2!: MatDatepicker<Date>;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  capitulosDisponibles: string[] = [];
  examenesDisponibles: string[] = [];
  certificacionesDisponibles: string[] = [];
  private subscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private resultadoService: ResultadoService,
    private route: ActivatedRoute
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedChapter'] || changes['selectedExam'] || changes['startDateFilter'] || changes['endDateFilter'] || changes['selectedCertification']) {
      this.applyFilters({});
    }
  }

  ngOnInit(): void {
    const username = localStorage.getItem('username');
    const id = localStorage.getItem('idUser');

    if (id) {
      this.loading = true;
      this.subscription.add(this.loadUserExamResults(Number(id)).subscribe({
        next: (resultadosConDetalles) => {
          this.resultadosConDetalles.data = resultadosConDetalles;
          if (this.paginator) {
            this.resultadosConDetalles.paginator = this.paginator;
            this.paginator.firstPage();
          }
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      }));
    }

    if (username) {
      this.subscription.add(this.authService.getUserProfile(username).subscribe({
        next: (data) => {
          this.user = data;
        },
        error: (e) => console.error(e)
      }));
    }
  }

  clearFilters() {
    this.filterChapter = '';
    this.startDateFilter = null;
    this.endDateFilter = null;
    this.selectedChapter = null;
    this.selectedExam = null;
    this.selectedCertification = null;

    this.loading = true;
    this.loadUserExamResults(Number(localStorage.getItem('idUser'))).subscribe({
      next: (resultadosConDetalles) => {
        this.resultadosConDetalles.data = resultadosConDetalles;
        if (this.paginator) {
          this.resultadosConDetalles.paginator = this.paginator;
          this.paginator.firstPage();
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  applyFilterByName(value: string): void {
    const filterValue = value.trim().toLowerCase();

    if (!filterValue) {
      this.loadUserExamResults(Number(localStorage.getItem('idUser')));
    } else {
      const filteredData = this.resultadosConDetalles.data.filter(item =>
        item.nombreExamen.toLowerCase().includes(filterValue)
      );
      this.resultadosConDetalles.data = filteredData;
    }

    this.resultadosConDetalles.paginator = this.paginator;
    this.paginator.firstPage();
  }

  applyFilterByCertification(value: string): void {
    const filterValue = value.trim().toLowerCase();
    this.loading = true;

    // Clear the filter before applying the new one
    this.loadUserExamResults(Number(localStorage.getItem('idUser'))).subscribe({
      next: (resultadosConDetalles) => {
        this.resultadosConDetalles.data = resultadosConDetalles;
        if (!filterValue) {
          if (this.paginator) {
            this.resultadosConDetalles.paginator = this.paginator;
            this.paginator.firstPage();
          }
        } else {
          const filteredData = this.resultadosConDetalles.data.filter(item =>
            item.certificacionNombre.toLowerCase().includes(filterValue)
          );
          this.resultadosConDetalles.data = filteredData;
          this.resultadosConDetalles.paginator = this.paginator;
          this.paginator.firstPage();
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  applyFilters($event: any) {
    this.loading = true;

    this.loadUserExamResults(Number(localStorage.getItem('idUser'))).subscribe({
      next: (resultadosConDetalles) => {
        this.resultadosConDetalles.data = resultadosConDetalles;
        this.applyFilter(this.filterChapter);
        this.applyDateFilter(this.startDateFilter, 'start');
        this.applyDateFilter(this.endDateFilter, 'end');
        this.applyFilterByCertification(this.selectedCertification || '');
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  ngAfterViewInit(): void {
    this.retryInitializePaginator();
  }

  retryInitializePaginator(retries = 5): void {
    if (this.paginator) {
      this.resultadosConDetalles.paginator = this.paginator;
    } else if (retries > 0) {
      setTimeout(() => this.retryInitializePaginator(retries - 1), 100);
    } else {
      console.error('Paginator no está inicializado después de varios intentos.');
    }
  }

  ngAfterViewChecked(): void {
    if (this.paginator && !this.resultadosConDetalles.paginator) {
      this.resultadosConDetalles.paginator = this.paginator;
    }
  }

  loadUserExamResults(userId: number) {
    return this.resultadoService.getResultadosByUserId(userId).pipe(
      map((resultados: any[]) => {
        const detalles = resultados.map((resultado: any) => ({
          ...resultado,
          nombreExamen: resultado.nombre,
          capituloExamen: resultado.chapter,
          certificacionNombre: resultado.certificacionNombre
        }));

        this.capitulosDisponibles = detalles.map((res: any) => res.capituloExamen).filter((value: string, index: number, self: string[]) => self.indexOf(value) === index);
        this.examenesDisponibles = detalles.map((res: any) => res.nombreExamen).filter((value: string, index: number, self: string[]) => self.indexOf(value) === index);
        this.certificacionesDisponibles = detalles.map((res: any) => res.certificacionNombre).filter((value: string, index: number, self: string[]) => self.indexOf(value) === index);
        return detalles;
      })
    );
  }

  openDatePicker1() {
    this.datePicker1.open();
  }

  openDatePicker2() {
    this.datePicker2.open();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    if (!filterValue) {
      this.loadUserExamResults(Number(localStorage.getItem('idUser')));
    } else {
      const filteredData = this.resultadosConDetalles.data.filter(item =>
        item.capituloExamen.toLowerCase().includes(filterValue)
      );
      this.resultadosConDetalles.data = filteredData;
    }
    this.resultadosConDetalles.paginator = this.paginator;
    this.paginator.firstPage();
  }

  applyDateFilter(date: Date | null, type: 'start' | 'end') {
    if (type === 'start') {
      this.startDateFilter = date;
    } else {
      this.endDateFilter = date;
    }
    this.loadUserExamResults(Number(localStorage.getItem('idUser')));
    this.paginator.firstPage();
  }
}
