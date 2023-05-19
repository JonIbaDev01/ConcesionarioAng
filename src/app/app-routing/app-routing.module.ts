
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { FormClienteComponent } from '../cliente/form-cliente/form-cliente.component';
import { AddClienteComponent } from '../cliente/add-cliente/add-cliente.component';
import { AddConcesionarioComponent } from '../concesionario/add-concesionario/add-concesionario.component';
import { FormConcesionarioComponent } from '../concesionario/form-concesionario/form-concesionario.component';
import { AddEmpleadoComponent } from '../empleado/add-empleado/add-empleado.component';
import { FormEmpleadoComponent } from '../empleado/form-empleado/form-empleado.component';
import { FormVehiculoComponent } from '../vehiculo/form-vehiculo/form-vehiculo.component';
import { AddVehiculoComponent } from '../vehiculo/add-vehiculo/add-vehiculo.component';
import { FormVentaComponent } from '../venta/form-venta/form-venta.component';
import { AddVentaComponent } from '../venta/add-venta/add-venta.component';

const appRoutes:Routes=[
  {path:"form-cliente", component: FormClienteComponent},
  {path:"crear-cliente", component: AddClienteComponent},
  {path:"form-concesionario", component: FormConcesionarioComponent},
  {path:"crear-concesionario", component: AddConcesionarioComponent},
  {path:"form-empleado", component: FormEmpleadoComponent},
  {path:"crear-empleado", component: AddEmpleadoComponent},
  {path:"form-vehiculo", component: FormVehiculoComponent},
  {path:"crear-vehiculo", component: AddVehiculoComponent},
  {path:"form-venta", component: FormVentaComponent},
  {path:"crear-venta", component: AddVentaComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
