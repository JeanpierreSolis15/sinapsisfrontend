import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from '../../../services/usuario.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  model: NgbDateStruct;
  placement = 'bottom';
  @ViewChild('NgbdDatepicker') d: NgbDateStruct;
  myGroup: FormGroup;

  nombre: any;
  correo: any;
  direccion: any;
  fecha: any;
  telefono: any;

  data_users: any = [];
  constructor(private us: UsuariosService, private router:Router) {
    this.getData();
  }

  ngOnInit(): void {}

  async getData() {
    this.data_users = this.us.data_users_gloval;
    // console.log(this.data_users)
  }

  Cancelar(){
    this.router.navigate(['listar']);
  }

  Guardar() {
    if (
      this.nombre === undefined ||
      this.correo ||
      this.telefono === undefined ||
      this.direccion === undefined
    ) {
      alert('Rellena todos los campos');
    } else {
      let json = {
        ID_USUA: this.data_users.length,
        NO_USUA: this.nombre,
        EMAIL_USUA: this.correo,
        MOVIL_USUA: this.telefono,
        DIRECCION_USUA: this.direccion,
        FECHA_NACIMIENTO_USUA: calcularEdad(this.fecha),
        ESTADO_USUA: 1,
      };
      this.us.data_users_gloval.push(json);
      this.router.navigate(['listar']);
    }
  }
}

function calcularEdad(fecha) {
  var hoy = new Date();
  var cumpleanos = new Date(fecha);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
  }

  return edad;
}

