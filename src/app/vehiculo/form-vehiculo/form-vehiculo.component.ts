import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/model/Vehiculo';
import { ApiVehiculoService } from 'src/app/services/api-vehiculo.service';

@Component({
  selector: 'app-form-vehiculo',
  templateUrl: './form-vehiculo.component.html',
  styleUrls: ['./form-vehiculo.component.css']
})
export class FormVehiculoComponent implements OnInit {

  formVehiculo:Vehiculo[]=[];
  constructor(private api:ApiVehiculoService, private router:Router){}
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos():void{
    this.api.traerTodos().subscribe(res=>{
      this.formVehiculo=res.data;
    });
  }

  delete(data:number){
    this.api.eliminarVehiculo(data).subscribe(res=>{
      
      if(res.status==="ok"){
        alert("Eliminacion Exitosa");
        this.router.navigate(['form-vehiculo'])
      }
    });
  }
}
