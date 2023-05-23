import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListadoService } from './listado.service';
import { IBucket } from './ibucket';
import { MatDialog } from '@angular/material/dialog';
import { PopupNuevoBucketComponent } from '../popup-nuevo-bucket/popup-nuevo-bucket.component';

@Component({
  selector: 'app-listado-buckets',
  templateUrl: './listado-buckets.component.html',
  styleUrls: ['./listado-buckets.component.css']
})
export class ListadoBucketsComponent implements OnInit{
  public buckets: IBucket[]=[]; 
  constructor(private listadoService: ListadoService, private router: Router, 
    public dialog: MatDialog){}
  
  ngOnInit(): void {
    this.cargarDatos(); 
  }
  cargarDatos() {
    //me suscribo al observable (2º param subscribe: si se produce un error --> deprecated)
    /* this.listadoService.getBuckets().subscribe(buckets => this.buckets = buckets,
       error => console.error(error)); */
       this.listadoService.getBuckets().subscribe(
        buckets => {
          this.buckets = buckets;
          console.log("termina cargar datos");
          this.router.navigate(['/listado']); 
          console.log("Navegar después de obtener los datos");

          // Navegar después de obtener los datos
        },
        error => console.error(error)
      );
       
  }

  eliminarBucket(nombreBucket: string){
    this.listadoService.deleteBucket(nombreBucket).subscribe(()=>this.cargarDatos(),
      ()=> this.router.navigate(["/listado"])); 
  }

  abrirPopup(){
    const dialogRef = this.dialog.open(PopupNuevoBucketComponent, {
      width: '600px' // Ajusta el ancho según tus necesidades
    });

    dialogRef.afterClosed().subscribe(result => {
      //manejar la información devuelta por el popup.
      if (result) {
        console.log('Nombre del bucket:', result);

        this.listadoService.createBucket(result).subscribe(()=>{
          
          location.reload(); 
        }, 
        error => {
          if (error.status === 200) {
            console.log("creado correctamente");
            location.reload(); 
            // this.cargarDatos();
          } else if(error.status===400){
           alert("Bucket ya creado")
          }
        }); 
    
      } else {
        console.log('El popup se cerró sin guardar.');
      }
    });
  }

  onSaveSuccess() {
    this.cargarDatos(); 
    // this.router.navigate(["/listado"]);
    // console.log("termina cargar vista");

  }

}
