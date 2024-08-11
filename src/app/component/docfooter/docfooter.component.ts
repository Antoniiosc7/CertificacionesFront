import {Component, Input} from '@angular/core';
import {NgDocPageBreadcrumbs} from "@ng-doc/app";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-docfooter',
  standalone: true,
  imports: [],
  templateUrl: './docfooter.component.html',
  styleUrl: './docfooter.component.css'
})
export class DocfooterComponent implements NgDocPageBreadcrumbs {
  @Input({ required: true })
  breadcrumbs: string[] = [];
  goBack(): void {
    const currentUrl = this.location.path();
    const newUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
    this.router.navigateByUrl(newUrl);
  }

  constructor(private location: Location, private router: Router) {}
}
