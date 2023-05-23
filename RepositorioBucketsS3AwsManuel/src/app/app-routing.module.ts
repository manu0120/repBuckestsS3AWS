import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListadoBucketsComponent } from './listado-buckets/listado-buckets.component';
import { ListadoFicherosComponent } from './listado-ficheros/listado-ficheros.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'listado', component: ListadoBucketsComponent}, 
  {path: 'listadoficheros/:nombre', component: ListadoFicherosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
