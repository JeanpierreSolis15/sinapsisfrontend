import { AgregarComponent } from './Usuarios/agregar/agregar.component';
import { EditarComponent } from './Usuarios/editar/editar.component';
import { VerusuarioComponent } from './Usuarios/verusuario/verusuario.component';
import { ListarComponent } from './Usuarios/listar/listar.component';

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'listar',component:ListarComponent
  },
  {
    path: 'ver',component:VerusuarioComponent
  },
  {
    path: 'edit',component:EditarComponent
  },
  {
    path: 'agregar',component:AgregarComponent
  }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
