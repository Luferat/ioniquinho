import { Component, OnInit, inject } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-cam',
  templateUrl: './cam.page.html',
  styleUrls: ['./cam.page.scss'],
})
export class CamPage implements OnInit {

  public photoURL: any;
  public photoFormat = '';
  public saved = false;
  public savedURL = '';

  constuctor() { }

  ngOnInit() { }

  // Obtém uma foto da API da câmera.
  getPhoto() {
    this.saved = false;
    this.savedURL = '';
    Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      // Retorna o arquivo da câmera no formato 'BASE64' (jpg).
      resultType: CameraResultType.DataUrl
    }).then((x) => {
      console.log('Foto escolhida: ', x);
      this.photoURL = x.dataUrl;
      this.photoFormat = x.format;
    })
  }

}
