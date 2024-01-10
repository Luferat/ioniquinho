import { Component, OnInit } from '@angular/core';

import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-cam',
  templateUrl: './cam.page.html',
  styleUrls: ['./cam.page.scss'],
})
export class CamPage implements OnInit {

  constuctor() { }

  ngOnInit() {
    Camera.getPhoto({ quality: 90, allowEditing: true, resultType: CameraResultType.Uri })
      .then((x) => { console.log('Foto escolhida: ', x); })
      .catch((e) => { console.error(e); })
  }

}
