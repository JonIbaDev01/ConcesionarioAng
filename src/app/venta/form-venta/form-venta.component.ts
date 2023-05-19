import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/model/Venta';
import { ApiClienteService } from 'src/app/services/api-cliente.service';

@Component({
  selector: 'app-form-venta',
  templateUrl: './form-venta.component.html',
  styleUrls: ['./form-venta.component.css']
})
export class FormVentaComponent implements OnInit {

  formVenta:Venta[]=[];
  constructor(private api:ApiClienteService){}
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos():void{
    this.api.traerTodos().subscribe(res=>{
      this.formVenta=res.data;
    });
  }
}
