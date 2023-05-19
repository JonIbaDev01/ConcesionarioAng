import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Response } from '../model/Response';

let urlBase="http://localhost:8080/Venta"
@Injectable({
  providedIn: 'root'
})
export class ApiVentaService {

  constructor(private http:HttpClient) { }

  traerTodos():Observable<Response>{
    return this.http.get<Response>(urlBase+"/all");
  }

  crearVenta(data:any):Observable<Response>{
    return this.http.post<Response>(urlBase+"/crear",data);
  }

  eliminarVenta(data:number):Observable<Response>{
    return this.http.delete<Response>(urlBase+"/eliminar/"+data);
  }

}
