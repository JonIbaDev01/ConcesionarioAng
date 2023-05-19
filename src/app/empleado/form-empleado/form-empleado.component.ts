import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/model/Empleado';
import { ApiEmpleadoService } from 'src/app/services/api-empleado.service';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {

  formEmpleado:Empleado[]=[];
  constructor(private api:ApiEmpleadoService){}
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos():void{
    this.api.traerTodos().subscribe(res=>{
      this.formEmpleado=res.data;
    });
  }
}
