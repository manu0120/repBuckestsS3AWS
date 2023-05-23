import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBucket } from './ibucket';

/* servicio que utilizaremos para acceder a los datos de la Web Api a través de solicitudes 
HTTP. El servicio es injectable por lo que habrá que suscribirse desde el controlador */
@Injectable({
  providedIn: 'root'
})
export class ListadoService {
  private apiURL: string="";

  //inyectamos el servicio HttpClient en el constructor
  constructor(private http: HttpClient) { }

  getBuckets(): Observable<IBucket[]>{
    this.apiURL="https://localhost:7144/api/buckets/get-all"; 
    return this.http.get<IBucket[]>(this.apiURL); 
  }

  deleteBucket(nombreBucket: string): Observable<IBucket>{
    this.apiURL="https://localhost:7144/api/buckets/delete"; 
    
    // return this.http.delete<IBucket>(this.apiURL+"/"+nombreBucket);
    return this.http.delete<IBucket>(this.apiURL+"?bucketName="+nombreBucket); 

  }

  // createBucket(nombreBucket: string): Observable<IBucket> {
  //   this.apiURL = "https://localhost:7144/api/buckets";
  //   //return this.http.post<IBucket>(this.apiURL, nombreBucket);
  //   //return this.http.post<IBucket>(this.apiURL+"?bucketName="+nombreBucket);

  //   return this.http.post<IBucket>(this.apiURL, nombreBucket );
  // }

  createBucket(nombreBucket: string): Observable<IBucket> {
    this.apiURL = `https://localhost:7144/api/buckets/create?bucketName=${nombreBucket}`;
    console.log(this.apiURL); 
    return this.http.post<IBucket>(this.apiURL, null);
  }

  // createBucket(nombreBucket: string): Observable<IBucket> {
  // this.apiURL = "https://localhost:7144/api/buckets/create";
  // return this.http.post<IBucket>(this.apiURL, { bucketName: nombreBucket });
}

  
  

