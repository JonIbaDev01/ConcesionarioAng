import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/model/Vehiculo';
import { ApiVehiculoService } from 'src/app/services/api-vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-vehiculo',
  templateUrl: './form-vehiculo.component.html',
  styleUrls: ['./form-vehiculo.component.css']
})
export class FormVehiculoComponent implements OnInit {

  formVehiculo:Vehiculo[]=[];
  constructor(private api:ApiVehiculoService, private router:Router){}

  id:number=0;

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos():void{
    this.api.traerTodos().subscribe(res=>{
      this.formVehiculo=res.data;
    });
  }

  delete(id:number){
    this.id=id
    this.confirmar()  
     
  }

  confirmar():void{
    Swal.fire({
      title: "Vehiculos",
      text: "¿Desea Eliminar?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
  })
  .then((resultado) => {
      if (resultado.value) {
          // Hicieron click en "Sí"
          this.api.eliminarVehiculo(this.id).subscribe(res=>{
            console.log("++++++",res);
          });
          console.log("*Se elimina el Cliente*");
      } else  if (resultado.dismiss === Swal.DismissReason.cancel) {
          // Dijeron que no
          console.log("*NO se elimina el CLiente*");
      }
  });

  }
}
