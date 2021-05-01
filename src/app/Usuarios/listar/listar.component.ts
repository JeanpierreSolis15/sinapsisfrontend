import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuario.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  data_users: any = [];

  constructor(private us: UsuariosService, private router:Router) {
    
    this.getData()
  }

  ngOnInit(): void {
  }



  async getData() {
    setTimeout(() => {
      this.data_users = this.us.data_users_gloval
    }, 1000);

    // this.data_users = JSON.parse(localStorage.getItem('data_usuarios_storage'));
    
  }
  
  // async saveStorage(){
  //   let response = await this.us.getUsuarios();
  //   console.log(response)
  //   localStorage.setItem('data_usuarios_storage',JSON.stringify(response));
  //   this.getData();
  // }

  VerUsuario(id_user:any){
    // console.log(id_user)
    let arrayFilter = this.data_users.filter((e) => e.ID_USUA == id_user);
    // console.log(arrayFilter[0])
    localStorage.setItem('data_usuarios_view', JSON.stringify(arrayFilter[0]));
    this.router.navigate(['ver']);
  }

  Nuevo(){
    this.router.navigate(["agregar"]);    
  }

  EditarUsuario(id_user:any){
    // console.log(id_user)
    let arrayFilter = this.data_users.filter(e => e.ID_USUA == id_user)
    // console.log(arrayFilter[0])
    localStorage.setItem('data_usuarios_edit',JSON.stringify(arrayFilter[0]));
    this.router.navigate(["edit"]);

  }
}
