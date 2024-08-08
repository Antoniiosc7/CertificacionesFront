import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { NgDocNavbarComponent, NgDocRootComponent, NgDocSidebarComponent } from '@ng-doc/app';
import { NavigationComponent } from '../../component/navigation/navigation.component';
import { ApiService } from '../../services/api.service';
import { NgForOf } from '@angular/common';
import {Location} from '@angular/common';

@Component({
  selector: 'ng-doc-docs',
  templateUrl: 'docs.component.html',
  styleUrl: './docs.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [
    RouterOutlet,
    NgDocSidebarComponent,
    NgDocNavbarComponent,
    NgDocRootComponent,
    NavigationComponent,
    RouterLink,
    NgForOf
  ],
  standalone: true
})
export class DocsComponent implements OnInit {
  menuItems: { route: string, nombre: string, description: string }[] = [];
  certificacionId: string | null;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private location: Location
) {
    this.certificacionId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.apiService.getDocsByCert(this.certificacionId).subscribe(data => {
      this.menuItems = data.map((cert: any) => ({
        route: `/certificacion/${this.certificacionId}/docs/${cert.url}`,
        nombre: cert.nombre
      }));
    });
  }

  goBack(): void {
    this.location.back();
  }
}
