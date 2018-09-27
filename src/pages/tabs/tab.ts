import { Component } from '@angular/core';

import { Platform,ToastController  } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormPage } from '../form/form';
import { ListPage } from '../list/list';



@Component({
templateUrl:'tabs.html'})
export class TabIconTextContentPage {
  isAndroid: boolean = false;

  constructor(public platform: Platform,public toastCtrl: ToastController) {
    this.isAndroid = platform.is('android');
  }
  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Your files were successfully saved',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
}


@Component({
    templateUrl:'segmenttab.html'})
   export class IconTextPage {
     rootPage = TabIconTextContentPage;
     tab1Root = HomePage;
     tab2Root = FormPage;
     tab3Root = ListPage;
     isAndroid: boolean = false;
   
     constructor(public platform: Platform) {
       this.isAndroid = platform.is('android');
     }
   }