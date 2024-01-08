import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/home', icon: 'home' },
    { title: 'Faça Contato', url: '/contacts', icon: 'chatbubbles' },
    { title: 'Sobre', url: '/about', icon: 'information-circle' },
    { title: 'Políticas de Privacidade', url: '/privacy', icon: 'lock-closed' },
  ];
  constructor() { }
}
