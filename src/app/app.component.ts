import { Component } from '@angular/core';

// Importa o Core do Firebase e componentes necessários.
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  // Inicializa core do Firebase.
  app = initializeApp(environment.firebase);

  // Inicializa Authentication.
  auth = getAuth(this.app);

  // Variáveis de ambiente.
  env = environment;

  // Dados do usuário na view, quando não logado.
  appUser = {
    logged: false,
    title: 'Login / Entrar',
    url: '/login',
    icon: 'log-in',
    avatar: ''
  }

  // Menu principal
  public appPages = [
    { title: 'Início', url: '/home', icon: 'home' },
    { title: 'Câmera', url: '/cam', icon: 'camera' },
    { title: 'GPS', url: '/geo', icon: 'map' },
    { title: 'Dispositivo', url: '/dev', icon: 'phone-portrait' },
    { title: 'Faça Contato', url: '/contacts', icon: 'chatbubbles' },
    { title: 'Sobre', url: '/about', icon: 'information-circle' },
    { title: 'Sua Privacidade', url: '/privacy', icon: 'lock-closed' },
  ];

  constructor() { }

  ngOnInit() {

    // Monitora status do usuário.
    onAuthStateChanged(this.auth, (userData) => {

      if (userData) {

        // Dados do usuário na view, quando logado.
        this.appUser = {
          logged: true,
          title: userData.displayName + '',
          url: '/profile',
          icon: 'log-out',
          avatar: userData.photoURL + ''
        }

      }

    });
  }
}
