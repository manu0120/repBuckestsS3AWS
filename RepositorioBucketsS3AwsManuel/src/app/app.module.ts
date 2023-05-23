import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoBucketsComponent } from './listado-buckets/listado-buckets.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ListadoService } from './listado-buckets/listado.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupNuevoBucketComponent } from './popup-nuevo-bucket/popup-nuevo-bucket.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { ListadoFicherosComponent } from './listado-ficheros/listado-ficheros.component';



@NgModule({
  declarations: [
    AppComponent,
    ListadoBucketsComponent,
    HomeComponent,
    NavMenuComponent,
    PopupNuevoBucketComponent,
    ListadoFicherosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, 
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatDialogModule, 
    MatIconModule,
    MatButtonModule, 
    FormsModule
  ],
  providers: [ListadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
