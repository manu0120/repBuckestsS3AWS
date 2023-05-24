import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../listado-ficheros/dialogdata';
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-popup-mostrar-url',
  templateUrl: './popup-mostrar-url.component.html',
  styleUrls: ['./popup-mostrar-url.component.css']
})
export class PopupMostrarUrlComponent {
  /**
   *
   */
  constructor(public dialogRef: MatDialogRef<PopupMostrarUrlComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private clipboard: Clipboard) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  copyToClipboard(text: string) {
    this.clipboard.copy(text);
  }
  
}
