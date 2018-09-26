import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
@Component({
    templateUrl: 'list.html'
  })
  export class ListPage {
    constructor(public loadingCtrl: LoadingController) { }
    items = [
        'Pokémon Yellow',
        'Super Metroid',
        'Mega Man X',
        'The Legend of Zelda',
        'Pac-Man',
        'Super Mario World',
        'Street Fighter II',
        'Half Life',
        'Final Fantasy VII',
        'Star Fox',
        'Tetris',
        'Donkey Kong III',
        'GoldenEye 007',
        'Doom',
        'Fallout',
        'GTA',
        'Halo'
      ];
      itemSelected(item: string) {
        const loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000});
            loader.present();
            ()=>{  console.log("Selected Item", item);}
      }
      
  }