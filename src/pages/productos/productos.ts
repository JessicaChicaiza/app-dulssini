import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {Producto} from '../../interface/producto.interface';
import {ProductosProvider} from '../../providers/productos/productos';
import {DescripcionPage} from '../index.pages';
/**
 * Generated class for the ProductosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {


  list_productos:Producto[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private modCtrl:ModalController,
              private pro_provCrtl:ProductosProvider) {



    this.pro_provCrtl.consultarProductos().subscribe(
      resp=>{
        this.list_productos=resp;
        console.log(this.list_productos);
      });

  }


  producto_modal(producto: Producto){
    let modal = this.modCtrl.create(DescripcionPage,{'params': producto});
    modal.present();

  }




}
