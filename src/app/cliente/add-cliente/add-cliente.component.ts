import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiClienteService } from 'src/app/services/api-cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {
  
  clienteForm=new FormGroup({
    id:new FormControl(''),
    nombres:new FormControl(''),
    apellidos:new FormControl(''),
    telefono:new FormControl(''),
    correo:new FormControl(''),
  });

  constructor(private api:ApiClienteService, private router:Router){}
  ngOnInit(): void{

  }
  
  addCliente():void{
    let cliente={
      id:this.clienteForm.get('id')?.value,
      nombres:this.clienteForm.get('nombres')?.value,
      apellidos:this.clienteForm.get('apellidos')?.value,
      telefono:this.clienteForm.get('telefono')?.value,
      correo:this.clienteForm.get('correo')?.value
    }
    this.api.crearCliente(cliente).subscribe(resp=>{
      console.log("#$#$#$#$ ",resp);

          if(resp.status==="ok" && resp.code==="200"){
            Swal.fire('Registro exitoso')
            this.router.navigate(['form-cliente']);
          }else{
            Swal.fire("Registro fallido: "+ resp.status)
          }
    });  
  }

 
}
