import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public navCtrl:NavController){}

  ir_acerca_pagina(){
    this.navCtrl.navigateForward(`/acerca-de-pagina`);
  }
}
