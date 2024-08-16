import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { API_URL } from '../../../config';

import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {Location, NgForOf, NgIf} from "@angular/common";
import {LoadingSpinnerComponent} from "../../component/loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    MatTable,
    MatHeaderCellDef,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    NgForOf,
    MatHeaderRowDef,
    MatRowDef,
    NgIf,
    LoadingSpinnerComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  cert: string = '';
  files: string[] = [];
  links: any[] = [];
  loading: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute, private location: Location ) {}

  ngOnInit(): void {
    this.cert = this.route.snapshot.paramMap.get('cert') || '';
    this.loadFiles();
    this.loadLinks();
  }

  loadFiles(): void {
    this.loading = true;
    this.http.get<string[]>(`${API_URL}/api/files/list`).subscribe({
      next: (files) => {
        this.files = files;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading files:', error);
        this.loading = false;
      }
    });
  }

  loadLinks(): void {
    this.loading = true;
    this.http.get<EncInteresDTO[]>(`${API_URL}/api/files/enlaces/${this.cert}`).subscribe({
      next: (links) => {
        if (Array.isArray(links)) {
          this.links = links.map(link => ({
            web: link.web,
            name: link.nombre,
            url: link.enlace
          }));
        } else {
          this.links = [];
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading links:', error);
        this.loading = false;
      }
    });
  }

  getFileIcon(fileName: string): string {
    if (fileName.endsWith('.pdf')) {
      return 'assets/icons/pdf-icon.png';
    } else if (fileName.endsWith('.doc') || fileName.endsWith('.docx')) {
      return 'assets/icons/word-icon.png';
    }
    return 'assets/icons/default-icon.png';
  }

  openFile(fileName: string): void {
    const fileUrl = `${API_URL}/api/files/view/${fileName}`;
    window.open(fileUrl, '_blank');
  }
  goBack(): void {
    this.location.back();
  }
}

interface EncInteresDTO {
  web: string;
  nombre: string;
  enlace: string;
}
