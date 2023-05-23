import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-ficheros',
  templateUrl: './listado-ficheros.component.html',
  styleUrls: ['./listado-ficheros.component.css']
})
export class ListadoFicherosComponent {
  /**
   *
   */
  constructor(private activatedRoute:ActivatedRoute) {}

public nombreBucket:string=""; 

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      //si el id del parámetro es igual a "undefined", salimos del método
      if (params["nombre"] == undefined) { 
        return;
      }
  
      //se asigna el valor del id del nacimiento al campo nacimientoId
      this.nombreBucket= params["nombre"]; 
      console.log("Nombre: "+this.nombreBucket); 
      
      //se llama al servicio para obtener el artículo.Luego de obtener el artículo, se llama al método cargarForm() 
      //para llenar los valores del formulario. Si hay un error en el proceso, redirige a la página "/article"      

    }); 
  }
}
