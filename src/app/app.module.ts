import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MiAPage } from '../pages/mi-a/mi-a';
import { DivPage } from '../pages/div/div';
import { MdnOPage } from '../pages/mdn-o/mdn-o';
import { AviPage } from '../pages/avi/avi';
import { Bio1Page } from '../pages/bio1/bio1';
import { BioedPage } from '../pages/bioed/bioed';
import { BiotcPage } from '../pages/biotc/biotc';
import { BioavPage } from '../pages/bioav/bioav';
import { MitAlPage } from '../pages/mit-al/mit-al';
import { DivLPage } from '../pages/div-l/div-l';
import { MdnOlPage } from '../pages/mdn-ol/mdn-ol';
import { AviLPage } from '../pages/avi-l/avi-l';
import { MitaOPage } from '../pages/mita-o/mita-o';
import { DivOPage } from '../pages/div-o/div-o';
import { MdnoOPage } from '../pages/mdno-o/mdno-o';
import { AviOPage } from '../pages/avi-o/avi-o';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MiAPage,
    DivPage,
    MdnOPage, 
    AviPage,
    Bio1Page, 
    BioedPage,
    BiotcPage,
    BioavPage,
    MitAlPage,
    DivLPage,
    MdnOlPage, 
    AviLPage,
    MitaOPage,
    DivOPage,
    MdnoOPage, 
    AviOPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MiAPage,
    DivPage,
    MdnOPage,
    AviPage,
    Bio1Page,
    BioedPage,
    BiotcPage,
    BioavPage,
    MitAlPage,
    DivLPage,
    MdnOlPage, 
    AviLPage, 
    MitaOPage,
    DivOPage, 
    MdnoOPage,
    AviOPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
