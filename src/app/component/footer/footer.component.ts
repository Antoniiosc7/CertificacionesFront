import { Component } from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  cookiePolicyUrl: SafeUrl;
  antonioSaboridoUrl: SafeUrl;
  showFooter: boolean = true;

  constructor(private sanitizer: DomSanitizer,
  private router: Router) {
    this.cookiePolicyUrl = this.sanitizer.bypassSecurityTrustUrl('https://antoniosaborido.es/cookie-policy');
    this.antonioSaboridoUrl = this.sanitizer.bypassSecurityTrustUrl('https://antoniosaborido.es');
    this.router.events.subscribe(() => {
      this.showFooter = !this.router.url.includes('/docs');
    });

  }
}
