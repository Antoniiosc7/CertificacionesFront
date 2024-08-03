import {Component, OnInit} from '@angular/core';
import {ExamenService} from "../../services/examen.service";
import {ApiService} from "../../services/api.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-priv-home',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './priv-home.component.html',
  styleUrl: './priv-home.component.css'
})
export class PrivHomeComponent implements OnInit  {
  menuItems: { route: string, title: string, description: string }[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCerts().subscribe(data => {
      this.menuItems = data.map((cert: any) => ({
        route: `/certificacion/${cert.codCertificacion}`,
        title: cert.nombre,
        description: cert.descripcion
      }));
    });
  }
}
