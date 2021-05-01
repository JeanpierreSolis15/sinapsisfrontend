import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListarComponent } from './Usuarios/listar/listar.component';
import { EditarComponent } from './Usuarios/editar/editar.component';
import { VerusuarioComponent } from './Usuarios/verusuario/verusuario.component';
import { AgregarComponent } from './Usuarios/agregar/agregar.component';
import { NgbModule,NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    EditarComponent,
    VerusuarioComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
