import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import {JsonDataProvider} from '../../providers/json-data/json-data';
import {Observable} from 'rxjs/Observable';
@Component({
    templateUrl: 'list.html'
  })
  export class ListPage {
    isAndroid: boolean = false;
    public items:any;
    constructor(public loadingCtrl: LoadingController,public JsonData:JsonDataProvider) { }
    arrayData:Observable<any>;
    ionViewDidLoad(){
     this.arrayData=this.JsonData.getRemoteData()
     this.arrayData.subscribe(result=>{this.items=result})
    }
   
      itemSelected(item: string){
        const loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000});
            loader.present();
            console.log("Selected Item", item);
      }
     
  }
 