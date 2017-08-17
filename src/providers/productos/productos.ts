import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';


/*
  Generated class for the ProductosProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductosProvider {

  productosSails: string = 'http://port-1337.vinicioservidor-vynypm52876.codeanyapp.com/productos';
  categoriaSails: string = 'http://port-1337.vinicioservidor-vynypm52876.codeanyapp.com/categorias';
  usuariosSails: string = 'http://port-1337.vinicioservidor-vynypm52876.codeanyapp.com/usuarios';

  constructor(public http: Http) {
    console.log('Hello ProductosProvider Provider');
  }

  consultarProductos(){
    return this.http.get(this.productosSails).map(
      resp=>{
        return resp.json();
      });
  }


  login(credenciales: any){
    //console.log(credenciales);
    let params: URLSearchParams = new URLSearchParams();
    params.set('email', credenciales.email);
    params.set('password', credenciales.password);

    let requestOptions = new RequestOptions();
    requestOptions.search = params;
    return this.http.get(this.usuariosSails,requestOptions.search).map(
      resp=>{
        console.log(resp.json());
        return resp.json();
      });

  }




}
