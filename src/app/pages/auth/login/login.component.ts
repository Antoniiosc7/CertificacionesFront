import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/authService";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  message!: string | null;  messageType!: string;
  isSubmitting: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.isSubmitting = true;
    this.authService.login({username: this.username, password: this.password}).subscribe(
      response => {
        localStorage.setItem('idUser', response.idUser);
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('tokenType', response.tokenType);
        this.message = 'Inicio de sesión exitoso';
        this.messageType = 'success';
        this.router.navigate(['/home']).then(() => {
          window.location.reload();
        });
        this.isSubmitting = false;
      },
      error => {
        this.message = 'Error durante el inicio de sesión';
        this.messageType = 'danger';
        this.isSubmitting = false;
      }
    );
  }

  onRegister(): void {
    this.router.navigate(['/register']);
  }

  closeMessage() {
    this.message = null;
  }
}
