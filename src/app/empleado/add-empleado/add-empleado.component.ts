import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiEmpleadoService } from 'src/app/services/api-empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent implements OnInit {
  
  empleadoForm=new FormGroup({
    id:new FormControl(''),
    nombres:new FormControl(''),
    apellidos:new FormControl(''),
    telefono:new FormControl(''),
    correo:new FormControl(''),
  });

  constructor(private api:ApiEmpleadoService, private router:Router){}
  ngOnInit(): void{

  }
  
  addEmpleado():void{
    let empleado={
      id:this.empleadoForm.get('id')?.value,
      nombres:this.empleadoForm.get('nombres')?.value,
      apellidos:this.empleadoForm.get('apellidos')?.value,
      telefono:this.empleadoForm.get('telefono')?.value,
      correo:this.empleadoForm.get('correo')?.value
    }
    this.api.crearEmpleado(empleado).subscribe(resp=>{
      console.log("#$#$#$#$ ",resp);

          if(resp.status==="ok" && resp.code==="200"){
            Swal.fire('Registro exitoso')
            this.router.navigate(['form-empleado']);
          }else{
            Swal.fire("Registro fallido: "+ resp.status)
          }
    }); 
  }
}
