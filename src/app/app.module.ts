import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BadgesPage } from '../pages/badges/badges';
import { FormPage } from '../pages/form/form';
import { ListPage } from '../pages/list/list';
import { ModalsPage } from '../pages/modals/modals';
import { ModalContentPage } from '../pages/modals/modals';
import { NavPage } from '../pages/navigation/navigation';
import { NavigationDetailsPage } from '../pages/navigation/navigation';
import { SearchPage } from '../pages/searchbar/searchbar';
import { SegmentPage } from '../pages/segment/segment';
import { IconTextPage } from '../pages/tabs/tab';
import { TabIconTextContentPage } from '../pages/tabs/tab';
@NgModule({
  declarations: [
    MyApp,
    BadgesPage,
    HomePage,
    FormPage,
    ListPage,
    ModalsPage,
    ModalContentPage,
    NavPage,
    NavigationDetailsPage,
    SearchPage,
    SegmentPage,
    IconTextPage,
    TabIconTextContentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BadgesPage,
    HomePage,
    FormPage,
    ListPage,
    ModalsPage,
    ModalContentPage,
    NavPage,
    NavigationDetailsPage,
    SearchPage,
    SegmentPage,
    IconTextPage,
    TabIconTextContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
