import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListadoFicherosService } from './listado-ficheros.service';
import { IFile } from './ifile';
import { MatDialog } from '@angular/material/dialog';
import { PopupMostrarUrlComponent } from '../popup-mostrar-url/popup-mostrar-url.component';

@Component({
  selector: 'app-listado-ficheros',
  templateUrl: './listado-ficheros.component.html',
  styleUrls: ['./listado-ficheros.component.css']
})
export class ListadoFicherosComponent implements OnInit{
  /**
   *
   */
  constructor(private activatedRoute:ActivatedRoute, 
    private listadoFicherosService: ListadoFicherosService, 
    private router: Router, 
    public dialog: MatDialog) {}

  public files: IFile[]=[]; 
  public nombreBucket:string="";  

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      //si el id del parámetro es igual a "undefined", salimos del método
      if (params["nombre"] == undefined) { 
        return;
      }
      this.nombreBucket= params["nombre"]; 

      this.cargarFicheros(); 
    }); 
  }
  cargarFicheros() {
    this.listadoFicherosService.getFiles(this.nombreBucket).subscribe(files =>{
      this.files=files; 
      this.router.navigate(['/listadoficheros/'+this.nombreBucket])
    })
  }

  abrirPopup(urlParam: string){
    const dialogRef = this.dialog.open(PopupMostrarUrlComponent, {
      width: '600px', // Ajusta el ancho según tus necesidades
      data: {url: urlParam}
    });
  }
}
