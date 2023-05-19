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
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos():void{
    this.api.traerTodos().subscribe(res=>{
      this.formEmpleado=res.data;
    });
  }

  delete(data:number){
    this.api.eliminarEmpleado(data).subscribe(resp=>{
      console.log("#$#$#$#$ ",resp);

          if(resp.status==="ok" && resp.code==="200"){
            Swal.fire('Eliminacion exitosa')
            this.router.navigate(['form-empleado']);
          }else{
            Swal.fire("Eliminacion fallida: "+ resp.status)
          }
    });
  }
}
