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
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos():void{
    this.api.traerTodos().subscribe(res=>{
      this.formConcesionario=res.data;
    });
  }

  delete(data:number){
    this.api.eliminarConcesionario(data).subscribe(resp=>{
      
      console.log("#$#$#$#$ ",resp);

          if(resp.status==="ok" && resp.code==="200"){
            Swal.fire('Eliminacion exitosa')
            this.router.navigate(['form-concesionario']);
          }else{
            Swal.fire("Eliminacion fallida: "+ resp.status)
          }
    });
  }
}
