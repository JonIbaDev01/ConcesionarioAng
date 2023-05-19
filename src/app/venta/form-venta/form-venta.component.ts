import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta } from 'src/app/model/Venta';
import { ApiVentaService } from 'src/app/services/api-venta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-venta',
  templateUrl: './form-venta.component.html',
  styleUrls: ['./form-venta.component.css']
})
export class FormVentaComponent implements OnInit {

  formVenta:Venta[]=[];
  constructor(private api:ApiVentaService, private router:Router){}

  id:number=0;

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos():void{
    this.api.traerTodos().subscribe(res=>{
      this.formVenta=res.data;
    });
  }

  delete(id:number){
    this.id=id
    this.confirmar()  
     
  }

  confirmar():void{
    Swal.fire({
      title: "Ventas",
      text: "¿Desea Eliminar?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
  })
  .then((resultado) => {
      if (resultado.value) {
          // Hicieron click en "Sí"
          this.api.eliminarVenta(this.id).subscribe(res=>{
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
