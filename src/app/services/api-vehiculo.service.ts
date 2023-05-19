import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Response } from '../model/Response';

let urlBase="http://localhost:8080/Vehiculo"
@Injectable({
  providedIn: 'root'
})
export class ApiVehiculoService {

  constructor(private http:HttpClient) { }

  traerTodos():Observable<Response>{
    return this.http.get<Response>(urlBase+"/all");
  }

  crearVehiculo(data:any):Observable<Response>{
    return this.http.post<Response>(urlBase+"/crear",data);
  }

  eliminarVehiculo(data:number):Observable<Response>{
    return this.http.get<Response>(urlBase+"/eliminar/"+data);
  }

}
