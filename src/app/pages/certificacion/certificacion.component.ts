import { Component, OnInit } from '@angular/core';
import {ExamenService} from "../../services/examen.service";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {CommonModule, NgForOf} from "@angular/common";

@Component({
  selector: 'app-certificacion',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    CommonModule
  ],
  templateUrl: './certificacion.component.html',
  styleUrl: './certificacion.component.css'
})
export class CertificacionComponent implements OnInit {
  certificacionId: string | null;
  menuItems: { route: string, nombreMenu: string }[] = [];
  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.certificacionId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    console.log(this.certificacionId);

    this.apiService.getMenuByCert(this.certificacionId).subscribe(data => {
      this.menuItems = data.map((cert: any) => ({
        route: `/certificacion/${this.certificacionId}/${cert.codMenu}`,
        nombreMenu: cert.nombreMenu
      }));
    });
  }

}
