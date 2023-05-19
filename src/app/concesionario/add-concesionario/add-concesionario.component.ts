import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Concesionario } from 'src/app/model/Concesionario';
import { ApiConcesionarioService } from 'src/app/services/api-concesionario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-concesionario',
  templateUrl: './add-concesionario.component.html',
  styleUrls: ['./add-concesionario.component.css']
})
export class AddConcesionarioComponent implements OnInit {
  
  concesionarioForm=new FormGroup({
    id:new FormControl(''),
    nombre:new FormControl(''),
    direccion:new FormControl(''),
    telefono:new FormControl(''),
  });

  constructor(private api:ApiConcesionarioService, private router:Router){}
  ngOnInit(): void{

  }
  
  addConcesionario():void{
    let concesionario={
      id:this.concesionarioForm.get('id')?.value,
      nombre:this.concesionarioForm.get('nombre')?.value,
      direccion:this.concesionarioForm.get('direccion')?.value,
      telefono:this.concesionarioForm.get('telefono')?.value
    }
    this.api.crearConcesionario(concesionario).subscribe(resp=>{
      console.log("#$#$#$#$ ",resp);

          if(resp.status==="ok" && resp.code==="200"){
            Swal.fire('Registro exitoso')
            this.router.navigate(['form-concesionario']);
          }else{
            Swal.fire("Registro fallido: "+ resp.status)
          }
    }); 
  }
}
