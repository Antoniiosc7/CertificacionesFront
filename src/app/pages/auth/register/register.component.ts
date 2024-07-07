import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../../../untitled1/CubiqfyFront/src/app/services/authService";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username!: string;
  password!: string;
  message!: string;
  messageType!: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.promptForCredentials();
  }

  promptForCredentials() {
    let user = '';
    let pass = '';

    while (user !== 'admin' || pass !== 'admin1234') {
      let user = window.prompt('Introduce tu nombre de usuario:');
      let pass = window.prompt('Introduce tu contraseña:');

      if (user === 'admin' && pass === 'admin1234') {

        break;
      } else {
        alert('Credenciales incorrectas. Intenta de nuevo.');
      }
    }
  }
  onRegister(): void {
    this.authService.register({username: this.username, password: this.password}).subscribe(
      response => {
        // Aquí puedes manejar la respuesta del servidor
        this.message = 'Registro exitoso';
        this.messageType = 'success';
      },
      error => {
        this.message = 'Error durante el registro';
        this.messageType = 'danger';
      }
    );
  }
}
