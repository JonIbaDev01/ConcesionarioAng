import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/model/Empleado';
import { ApiEmpleadoService } from 'src/app/services/api-empleado.service';

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
    this.api.eliminarEmpleado(data).subscribe(res=>{
      if(res.status==="ok"){
        alert("Eliminacion Exitosa");
        this.router.navigate(['form-empleado'])
      }
    });
  }
}
