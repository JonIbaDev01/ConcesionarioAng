import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiVentaService } from 'src/app/services/api-venta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-venta',
  templateUrl: './add-venta.component.html',
  styleUrls: ['./add-venta.component.css']
})
export class AddVentaComponent implements OnInit {
  
  ventaForm=new FormGroup({
    id:new FormControl(''),
    fecha:new FormControl(''),
    metPago:new FormControl(''),
    totalVenta:new FormControl(''),
    nomCliente:new FormControl(''),
    apellCliente:new FormControl(''),
    nomEmpleado:new FormControl(''),
    apellEmpleado:new FormControl(''),
    precio:new FormControl(''),
    color:new FormControl(''),
  });

  constructor(private api:ApiVentaService, private router:Router){}
  ngOnInit(): void{

  }
  
  addVenta():void{
    let venta={
      id:this.ventaForm.get('id')?.value,
      fecha:this.ventaForm.get('fecha')?.value,
      metPago:this.ventaForm.get('metPago')?.value,
      totalVenta:this.ventaForm.get('totalVenta')?.value,
      nomCliente:this.ventaForm.get('nomCliente')?.value,
      apellCliente:this.ventaForm.get('apellCliente')?.value,
      nomEmpleado:this.ventaForm.get('nomEmpleado')?.value,
      apellEmpleado:this.ventaForm.get('apellEmpleado')?.value,
      precio:this.ventaForm.get('precio')?.value,
      color:this.ventaForm.get('color')?.value
    }
    this.api.crearVenta(venta).subscribe(resp=>{
      console.log("#$#$#$#$ ",resp);

          if(resp.status==="ok" && resp.code==="200"){
            Swal.fire('Registro exitoso')
            this.router.navigate(['form-venta']);
          }else{
            Swal.fire("Registro fallido: "+ resp.status)
          }
    }); 
  }
}
