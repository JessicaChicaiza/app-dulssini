import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {Producto} from '../../interface/producto.interface';

/**
 * Generated class for the DescripcionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descripcion',
  templateUrl: 'descripcion.html',
})
export class DescripcionPage {

  producto: Producto= {

  categoria: '',
  nombre: '',
  precio: 0,
  descripcion: '',
  imagen: ''

}
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl: ViewController) {
    console.log(navParams);console.log(navParams);
    this.producto=this.navParams.get("params");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacionPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
