import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from '@angular/http';
import { HomePage,CategoriasPage, LoginPage,DescripcionPage,  TabsPage,PerfilPage, ProductosPage} from '../pages/index.pages';

import { MyApp } from './app.component';
import { ProductosProvider } from '../providers/productos/productos';
//import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoriasPage,
    LoginPage,
    TabsPage,
    PerfilPage,
    ProductosPage,
    DescripcionPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoriasPage,
    LoginPage,
    TabsPage,
    PerfilPage,
    ProductosPage,
    DescripcionPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductosProvider
  ]
})
export class AppModule {}
