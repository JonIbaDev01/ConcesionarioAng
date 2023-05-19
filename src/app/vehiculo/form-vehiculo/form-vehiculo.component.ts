import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/model/Vehiculo';
import { ApiVehiculoService } from 'src/app/services/api-vehiculo.service';

@Component({
  selector: 'app-form-vehiculo',
  templateUrl: './form-vehiculo.component.html',
  styleUrls: ['./form-vehiculo.component.css']
})
export class FormVehiculoComponent implements OnInit {

  formVehiculo:Vehiculo[]=[];
  constructor(private api:ApiVehiculoService){}
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos():void{
    this.api.traerTodos().subscribe(res=>{
      this.formVehiculo=res.data;
    });
  }
}
