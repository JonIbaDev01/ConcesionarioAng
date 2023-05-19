import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Concesionario } from 'src/app/model/Concesionario';
import { ApiConcesionarioService } from 'src/app/services/api-concesionario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-concesionario',
  templateUrl: './form-concesionario.component.html',
  styleUrls: ['./form-concesionario.component.css']
})
export class FormConcesionarioComponent implements OnInit {

  formConcesionario:Concesionario[]=[];
  constructor(private api:ApiConcesionarioService, private router:Router){}

  id:number=0;

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos():void{
    this.api.traerTodos().subscribe(res=>{
      this.formConcesionario=res.data;
    });
  }

  // delete(data:number){
  //   this.api.eliminarConcesionario(data).subscribe(res=>{
      
  //     if(res.status==="ok"){
  //       alert("Eliminacion Exitosa");
  //       this.router.navigate(['form-concesionario'])
  //     }
  //   });
  // }

  delete(id:number){
    this.id=id
    this.confirmar()  
     
  }

  confirmar():void{
    Swal.fire({
      title: "Concesionario",
      text: "¿Desea Eliminar?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
  })
  .then((resultado) => {
      if (resultado.value) {
          // Hicieron click en "Sí"
          this.api.eliminarConcesionario(this.id).subscribe(res=>{
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
