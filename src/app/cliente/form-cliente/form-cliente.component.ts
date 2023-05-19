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
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos():void{
    this.api.traerTodos().subscribe(res=>{
      this.formCliente=res.data;
    });
  }

  delete(data:number){
    this.api.eliminarCliente(data).subscribe(resp=>{
      
      console.log("#$#$#$#$ ",resp);

          if(resp.status==="ok" && resp.code==="200"){
            Swal.fire('Eliminacion exitosa')
            this.router.navigate(['form-cliente']);
          }else{
            Swal.fire("Eliminacion fallida: "+ resp.status)
          }
    });
  }

  
}
