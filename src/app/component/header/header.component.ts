
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/authService';
import {window} from "rxjs";
import {CommonModule, Location} from "@angular/common";
import {Router, RouterModule} from "@angular/router";
import {NgDocNavbarComponent, NgDocRootComponent} from "@ng-doc/app";
import {NavigationComponent} from "../navigation/navigation.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, NgDocNavbarComponent, NavigationComponent, NgDocRootComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  showNavbar: boolean = false;
  tokenValido: boolean = false;
  constructor(public authService: AuthService, private location: Location, private router: Router) { } // Inyecta el servicio de sesión
  isAdmin = false;


  ngOnInit(): void {
    this.authService.checkTokenValidity().subscribe();
/*
    this.authService.isAdmin().subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    });
 this.router.events.subscribe(() => {
      const url = this.router.url;
      this.showNavbar = url === '/java' || url === '/docs';
    });
 */

  }

  isAccessTokenAbsent(): boolean {
    const token = sessionStorage.getItem('accessToken');
    return !token || token.trim() === '';
  }
  reloadPage(): void {
    location.reload();
  }
  protected readonly window = window;
}
