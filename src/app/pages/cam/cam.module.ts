import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamPageRoutingModule } from './cam-routing.module';

import { CamPage } from './cam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamPageRoutingModule
  ],
  declarations: [CamPage]
})
export class CamPageModule {}
