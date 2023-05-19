import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { ApiClienteService } from 'src/app/services/api-cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  formCliente:Cliente[]=[];
  constructor(private api:ApiClienteService, private router:Router){}

  id:number=0;

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos():void{
    this.api.traerTodos().subscribe(res=>{
      this.formCliente=res.data;
    });
  }

  delete(id:number){
    this.id=id
    this.confirmar()  
     
  }

  confirmar():void{
    Swal.fire({
      title: "Clientes",
      text: "¿Desea Eliminar?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
  })
  .then((resultado) => {
      if (resultado.value) {
          // Hicieron click en "Sí"
          this.api.eliminarCliente(this.id).subscribe(res=>{
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
