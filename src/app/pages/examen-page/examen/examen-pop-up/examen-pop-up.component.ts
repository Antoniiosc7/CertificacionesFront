import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-examen-pop-up',
  standalone: true,
  imports: [
    MatCardActions,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatButton
  ],
  templateUrl: './examen-pop-up.component.html',
  styleUrl: './examen-pop-up.component.css'
})
export class ExamenPopUpComponent {
  constructor(
    public dialogRef: MatDialogRef<ExamenPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { puntuacion: number, tiempo: number },
    private router: Router
  ) {}

  verRespuestas(): void {
    this.dialogRef.close();
  }

  irAlPerfil(): void {
    this.dialogRef.close();
    this.router.navigate(['/user']);
  }

  irAPaginaDeExamen(): void {
    this.dialogRef.close();
    const currentUrl = this.router.url;
    const newUrl = currentUrl.split('/').slice(0, -2).join('/');
    this.router.navigateByUrl(`${newUrl}/examenes`);
  }
}
