import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/model/Empleado';
import { ApiEmpleadoService } from 'src/app/services/api-empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {

  formEmpleado:Empleado[]=[];
  constructor(private api:ApiEmpleadoService, private router:Router){}

  id:number=0;

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos():void{
    this.api.traerTodos().subscribe(res=>{
      this.formEmpleado=res.data;
    });
  }

  delete(id:number){
    this.id=id
    this.confirmar()  
     
  }

  confirmar():void{
    Swal.fire({
      title: "Empleados",
      text: "¿Desea Eliminar?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
  })
  .then((resultado) => {
      if (resultado.value) {
          // Hicieron click en "Sí"
          this.api.eliminarEmpleado(this.id).subscribe(res=>{
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
