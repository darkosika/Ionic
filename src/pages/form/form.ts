import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'form.html'
})
export class FormPage {
    constructor(public alertCtrl: AlertController){}
    username;
    password;
    konu;
    sikayet;
    Login(){
        let prompt = this.alertCtrl.create({
            title:'login',
            message:' '+this.username+ ' '+this.password+' '+this.konu+' '+this.sikayet
        });
        prompt.present();
    }
 }