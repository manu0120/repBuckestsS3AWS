import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFile } from './ifile';

@Injectable({
  providedIn: 'root'
})
export class ListadoFicherosService {

  private apiURL: string="";

  //inyectamos el servicio HttpClient en el constructor
  constructor(private http: HttpClient) { }

  getFiles(nombreBucket: string): Observable<IFile[]>{
    this.apiURL="https://localhost:7144/api/files/get-all"; 
    return this.http.get<IFile[]>(this.apiURL+"?bucketName="+nombreBucket); 
  }

  deleteFile(nombreBucket: string, key: string): Observable<IFile>{
    this.apiURL="https://localhost:7144/api/files/delete"; 
    
    return this.http.delete<IFile>(this.apiURL+"?bucketName="+nombreBucket+"?key="+key); 

  }

  // createBucket(nombreBucket: string): Observable<IBucket> {
  //   this.apiURL = `https://localhost:7144/api/buckets/create?bucketName=${nombreBucket}`;
  //   console.log(this.apiURL); 
  //   return this.http.post<IBucket>(this.apiURL, null);
  // }

}
