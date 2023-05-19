import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Response } from '../model/Response';

let urlBase="http://localhost:8080/Empleado"
@Injectable({
  providedIn: 'root'
})
export class ApiEmpleadoService {

  constructor(private http:HttpClient) { }

  traerTodos():Observable<Response>{
    return this.http.get<Response>(urlBase+"/all");
  }

  crearEmpleado(data:any):Observable<Response>{
    return this.http.post<Response>(urlBase+"/crear",data);
  }

}
