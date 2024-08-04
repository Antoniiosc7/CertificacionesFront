import {Component, OnInit} from '@angular/core';
import {Examen} from "../../models/examen.model";
import {ExamenService} from "../../services/examen.service";
import {NgForOf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Location} from '@angular/common'; // Import Location service

@Component({
  selector: 'app-examen-page',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './examen-page.component.html',
  styleUrl: './examen-page.component.css'
})
export class ExamenPageComponent implements OnInit {
  examenes: Examen[] = [];
  courseId: string | null;

  constructor(
    private examenService: ExamenService,
    private route: ActivatedRoute,
    private location: Location
) {
    this.courseId = this.route.snapshot.paramMap.get('course');
  }

  ngOnInit(): void {
    /*
    this.examenService.getAllExamenes().subscribe(data => {
      this.examenes = data;
    });
     */

    this.examenService.getExamenByCertId(this.courseId).subscribe(data => {
      this.examenes = data;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
