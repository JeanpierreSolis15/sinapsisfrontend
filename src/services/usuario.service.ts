import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { URL_SERVICES } from '../config/url.services';

@Injectable({
    providedIn: 'root',
  })
  export class UsuariosService {

    data_users_gloval:any=[];
    constructor(private http: HttpClient) {
      localStorage.clear();
      this.saveStorage();
    }

    async saveStorage(){
      let response = await this.getUsuarios();
      for (let i = 0; i < response.length; i++) {
        this.data_users_gloval.push(response[i])
      }
    }
    
    getUsuarios() {
    let url: string = URL_SERVICES + "getUsuarios/";
    let promesa = this.http
      .get(url)
      .toPromise()
      .then((response) => Promise.resolve(JSON.parse(JSON.stringify(response))))
      .catch((error) => Promise.reject(error));
    return promesa;
  }
}