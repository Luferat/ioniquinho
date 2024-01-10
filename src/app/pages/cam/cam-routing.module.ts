import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamPage } from './cam.page';

const routes: Routes = [
  {
    path: '',
    component: CamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamPageRoutingModule {}
