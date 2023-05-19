import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiVehiculoService } from 'src/app/services/api-vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-vehiculo',
  templateUrl: './add-vehiculo.component.html',
  styleUrls: ['./add-vehiculo.component.css']
})
export class AddVehiculoComponent implements OnInit {
  
  vehiculoForm=new FormGroup({
    id:new FormControl(''),
    tipoVehiculo:new FormControl(''),
    modelo:new FormControl(''),
    centCubicos:new FormControl(''),
    placa:new FormControl(''),
    precio:new FormControl(''),
    marca:new FormControl(''),
    color:new FormControl(''),
  });

  constructor(private api:ApiVehiculoService, private router:Router){}
  ngOnInit(): void{

  }
  
  addVehiculo():void{
    let vehiculo={
      id:this.vehiculoForm.get('id')?.value,
      tipoVehiculo:this.vehiculoForm.get('tipoVehiculo')?.value,
      modelo:this.vehiculoForm.get('modelo')?.value,
      centCubicos:this.vehiculoForm.get('centCubicos')?.value,
      placa:this.vehiculoForm.get('placa')?.value,
      precio:this.vehiculoForm.get('precio')?.value,
      marca:this.vehiculoForm.get('marca')?.value,
      color:this.vehiculoForm.get('color')?.value
    }
    this.api.crearVehiculo(vehiculo).subscribe(resp=>{
      console.log("#$#$#$#$ ",resp);

          if(resp.status==="ok" && resp.code==="200"){
            Swal.fire('Registro exitoso')
            this.router.navigate(['lista-clientes']);
          }else{
            Swal.fire("Registro fallido: "+ resp.status)
          }
    }); 
  }
}
