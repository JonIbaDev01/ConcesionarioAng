import { Component, OnInit } from '@angular/core';
import { Concesionario } from 'src/app/model/Concesionario';
import { ApiConcesionarioService } from 'src/app/services/api-concesionario.service';

@Component({
  selector: 'app-form-concesionario',
  templateUrl: './form-concesionario.component.html',
  styleUrls: ['./form-concesionario.component.css']
})
export class FormConcesionarioComponent implements OnInit {

  formConcesionario:Concesionario[]=[];
  constructor(private api:ApiConcesionarioService){}
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos():void{
    this.api.traerTodos().subscribe(res=>{
      this.formConcesionario=res.data;
    });
  }
}
