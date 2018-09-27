import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';


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
   
     isAndroid: boolean = false;
   
     constructor(public platform: Platform) {
       this.isAndroid = platform.is('android');
     }
   }