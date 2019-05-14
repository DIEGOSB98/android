import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CRonaldoPage } from './c-ronaldo.page';

const routes: Routes = [
  {
    path: '',
    component: CRonaldoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CRonaldoPage]
})
export class CRonaldoPageModule {}
