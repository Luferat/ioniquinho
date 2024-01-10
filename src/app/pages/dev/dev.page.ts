import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.page.html',
  styleUrls: ['./dev.page.scss'],
})
export class DevPage implements OnInit {

  dev = {
    "info": {},
    "bat": {},
    "id": {}
  }

  constructor() {

    // Obtém dados do próprio dispositivo.
    Device.getInfo()
      .then((x) => {
        this.dev.info = x;
      })

    // Obtém status da bateria.
    Device.getBatteryInfo()
      .then((x) => {
        this.dev.bat = x;
      })

    // Obtém o Id único do dispositivo.
    Device.getId()
      .then((x) => {
        this.dev.id = x;
      })

  }

  ngOnInit() { }

}
