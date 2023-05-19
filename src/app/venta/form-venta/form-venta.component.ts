import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta } from 'src/app/model/Venta';
import { ApiVentaService } from 'src/app/services/api-venta.service';

@Component({
  selector: 'app-form-venta',
  templateUrl: './form-venta.component.html',
  styleUrls: ['./form-venta.component.css']
})
export class FormVentaComponent implements OnInit {

  formVenta:Venta[]=[];
  constructor(private api:ApiVentaService, private router:Router){}
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos():void{
    this.api.traerTodos().subscribe(res=>{
      this.formVenta=res.data;
    });
  }

  delete(data:number){
    this.api.eliminarVenta(data).subscribe(res=>{
      
      if(res.status==="ok"){
        alert("Eliminacion Exitosa");
        this.router.navigate(['form-venta'])
      }
    });
  }
}
