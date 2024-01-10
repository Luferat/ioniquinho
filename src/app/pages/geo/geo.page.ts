import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.page.html',
  styleUrls: ['./geo.page.scss'],
})
export class GeoPage implements OnInit {

  public coords = {
    latitude: 0,
    longitude: 0,
    speed: 0,
    accuracy: 0,
    mapURL: ''
  }

  public photoImg: any;

  constructor() {

    // Obtém dados do GPS do dispositivo.
    Geolocation.getCurrentPosition()
      .then((x) => {
        this.coords = {
          latitude: x.coords.latitude,
          longitude: x.coords.longitude,
          speed: (x.coords.speed) ? x.coords.speed : 0,
          accuracy: x.coords.accuracy,
          mapURL: `https://www.google.com/maps/search/?api=1&query=${x.coords.latitude},${x.coords.longitude}`
        }
      })

  }

  ngOnInit() { }

}
