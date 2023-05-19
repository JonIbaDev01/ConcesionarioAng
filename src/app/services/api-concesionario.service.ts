import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Response } from '../model/Response';

let urlBase="http://localhost:8080/Concesionario"
@Injectable({
  providedIn: 'root'
})
export class ApiConcesionarioService {

  constructor(private http:HttpClient) { }

  traerTodos():Observable<Response>{
    return this.http.get<Response>(urlBase+"/all");
  }

  crearConcesionario(data:any):Observable<Response>{
    return this.http.post<Response>(urlBase+"/crear",data);
  }

  eliminarConcesionario(data:number):Observable<Response>{
    return this.http.get<Response>(urlBase+"/eliminar/"+data);
  }

}
