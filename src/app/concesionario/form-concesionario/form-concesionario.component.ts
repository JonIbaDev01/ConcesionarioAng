import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Concesionario } from 'src/app/model/Concesionario';
import { ApiConcesionarioService } from 'src/app/services/api-concesionario.service';

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
    this.api.eliminarConcesionario(data).subscribe(res=>{
      
      if(res.status==="ok"){
        alert("Eliminacion Exitosa");
        this.router.navigate(['form-concesionario'])
      }
    });
  }
}
