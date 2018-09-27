import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormPage } from '../form/form';
import { ListPage } from '../list/list';



@Component({
templateUrl:'tabs.html'})
export class TabIconTextContentPage {
  isAndroid: boolean = false;

  constructor(public platform: Platform) {
    this.isAndroid = platform.is('android');
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