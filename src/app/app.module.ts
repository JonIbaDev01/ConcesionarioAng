import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormClienteComponent } from './cliente/form-cliente/form-cliente.component';
import { AddClienteComponent } from './cliente/add-cliente/add-cliente.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './template/header/header.component';
import { MenuComponent } from './template/menu/menu.component';
import { ApiClienteService } from './services/api-cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormConcesionarioComponent } from './concesionario/form-concesionario/form-concesionario.component';
import { AddConcesionarioComponent } from './concesionario/add-concesionario/add-concesionario.component';
import { FormEmpleadoComponent } from './empleado/form-empleado/form-empleado.component';
import { AddEmpleadoComponent } from './empleado/add-empleado/add-empleado.component';
import { FormVentaComponent } from './venta/form-venta/form-venta.component';
import { AddVentaComponent } from './venta/add-venta/add-venta.component';
import { FormVehiculoComponent } from './vehiculo/form-vehiculo/form-vehiculo.component';
import { AddVehiculoComponent } from './vehiculo/add-vehiculo/add-vehiculo.component';
import { ApiConcesionarioService } from './services/api-concesionario.service';
import { ApiEmpleadoService } from './services/api-empleado.service';
import { ApiVehiculoService } from './services/api-vehiculo.service';
import { ApiVentaService } from './services/api-venta.service';

@NgModule({
  declarations: [
    AppComponent,
    FormClienteComponent,
    AddClienteComponent,
    FormConcesionarioComponent,
    AddConcesionarioComponent,
    FormEmpleadoComponent,
    AddEmpleadoComponent,
    FormVentaComponent,
    AddVentaComponent,
    FormVehiculoComponent,
    AddVehiculoComponent,
    HeaderComponent,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ApiClienteService,ApiConcesionarioService,
            ApiEmpleadoService,ApiVehiculoService,ApiVentaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
