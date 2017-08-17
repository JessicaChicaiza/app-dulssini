import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from '../../pages/tabs/tabs';

import {ProductosProvider} from '../../providers/productos/productos';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  usuario: any = {
    email:"",
    password: ""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,private pro_provCrtl:ProductosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  ingresar(){
    this.pro_provCrtl.login(this.usuario).subscribe(
      data=>{
        console.log(data);
      }
    );
    console.log(this.usuario);


    this.navCtrl.push(TabsPage);

  }


}
