import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verusuario',
  templateUrl: './verusuario.component.html',
  styleUrls: ['./verusuario.component.css']
})
export class VerusuarioComponent {

  nombre: any;
  correo: any;
  direccion: any;
  fecha: any;
  telefono: any;

  data_user_view: any;
  constructor(private us: UsuariosService, private router: Router) {
    this.getDataEdit();
  }

  async getDataEdit() {
    let response = await JSON.parse(localStorage.getItem('data_usuarios_view'));
    // console.log(response);
    if (response === null) {
      this.router.navigate(['listar']);
    } else {
      console.log('si hay data');
      this.data_user_view = response;
      this.nombre = response.NO_USUA;
      this.correo = response.EMAIL_USUA;
      this.direccion = response.DIRECCION_USUA;
      this.telefono = response.MOVIL_USUA;
      this.fecha = response.FECHA_NACIMIENTO_USUA;
    }
  }

  Volver(){
    this.router.navigate(['listar']);
  }
}
