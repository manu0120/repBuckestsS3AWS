import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-nuevo-bucket',
  templateUrl: './popup-nuevo-bucket.component.html',
  styleUrls: ['./popup-nuevo-bucket.component.css']
})
export class PopupNuevoBucketComponent {
  nombreBucket: string=""; 

  /**
   *
   */
  constructor(public dialogRef: MatDialogRef<PopupNuevoBucketComponent>) {}

  guardar() {
    // Aquí puedes realizar cualquier lógica necesaria para guardar la información
    // en el código TypeScript.

    // Cierra el popup y pasa la información de vuelta a la vista anterior.
    this.dialogRef.close(this.nombreBucket);
  }

  cerrar() {
    // Cierra el popup sin guardar ninguna información.
    this.dialogRef.close();
  }
}
