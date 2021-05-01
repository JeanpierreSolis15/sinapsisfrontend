import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuario.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProyectoSinapsis';

  constructor(private us: UsuariosService, private router:Router) {
  }

  Listar(){
    this.router.navigate(["listar"]);
  }

  Nuevo(){
    this.router.navigate(["agregar"]);
    
  }
}
