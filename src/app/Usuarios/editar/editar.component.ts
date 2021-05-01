import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent {
  nombre: any;
  correo: any;
  direccion: any;
  fecha: any;
  telefono: any;

  data_user_edit: any;
  constructor(private us: UsuariosService, private router: Router) {
    this.getDataEdit();
  }

  async getDataEdit() {
    let response = await JSON.parse(localStorage.getItem('data_usuarios_edit'));
    console.log(response);
    if (response === null) {
      this.router.navigate(['listar']);
    } else {
      // console.log('si hay data');
      this.data_user_edit = response;
      this.nombre = response.NO_USUA;
      this.correo = response.EMAIL_USUA;
      this.direccion = response.DIRECCION_USUA;
      this.telefono = response.MOVIL_USUA;
    }
  }

  Cancelar(){
    this.router.navigate(['listar']);
  }
  
  async Editar() {
     console.log("as")
    for (let i = 0; i < this.us.data_users_gloval.length; i++) {
      if (
        this.us.data_users_gloval[i].ID_USUA === this.data_user_edit.ID_USUA
      ) {
        this.us.data_users_gloval[i].NO_USUA = this.nombre;
        this.us.data_users_gloval[i].EMAIL_USUA = this.correo;
        this.us.data_users_gloval[i].MOVIL_USUA = this.telefono;
        this.us.data_users_gloval[i].DIRECCION_USUA = this.direccion;
        if(this.fecha === undefined) {
          // console.log("No hay cambios en fecha")
        }else{
          this.us.data_users_gloval[i].FECHA_NACIMIENTO_USUA = this.fecha;
        }
      }else{
        // console.log(this.us.data_users_gloval);
      }
    }
    this.router.navigate(['listar']);

    // console.log(this.us.data_users_gloval);
  }
}
