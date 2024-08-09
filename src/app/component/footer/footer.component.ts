import { Component } from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  cookiePolicyUrl: SafeUrl;
  antonioSaboridoUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.cookiePolicyUrl = this.sanitizer.bypassSecurityTrustUrl('https://antoniosaborido.es/cookie-policy');
    this.antonioSaboridoUrl = this.sanitizer.bypassSecurityTrustUrl('https://antoniosaborido.es');
  }
}
