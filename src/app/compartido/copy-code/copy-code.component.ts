import { Component, Input } from '@angular/core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-copy-code',
  templateUrl: './copy-code.component.html',
  styleUrls: ['./copy-code.component.css']
})
export class CopyCodeComponent {
  @Input() commandText: string = ''; // Permite recibir texto desde el componente padre
  faCopy = faCopy;

  constructor(private snackBar: MatSnackBar) {}

  copyCommand() {
    navigator.clipboard.writeText(this.commandText).then(() => {
      this.mostrarNotificacion('Comando copiado al portapapeles');
    });
  }

  mostrarNotificacion(mensaje: string): void {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 1000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }
}
