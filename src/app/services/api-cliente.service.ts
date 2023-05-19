import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Response } from '../model/Response';

let urlBase="http://localhost:8080/Cliente"
@Injectable({
  providedIn: 'root'
})
export class ApiClienteService {

  constructor(private http:HttpClient) { }

  traerTodos():Observable<Response>{
    return this.http.get<Response>(urlBase+"/all");
  }

  crearCliente(data:any):Observable<Response>{
    return this.http.post<Response>(urlBase+"/crear",data);
  }

  actualizarCliente(data:any):Observable<Response>{
    return this.http.post<Response>(`urlBase+"/Actualizar"/${data}`,data);
  }

  eliminarCliente(data:number):Observable<Response>{
    return this.http.get<Response>(urlBase+"/eliminar/"+data);
  }

}
