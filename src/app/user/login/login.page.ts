import { Component, OnInit } from '@angular/core';

// Importa Firebase e componentes de authenticação.
import { initializeApp } from 'firebase/app';
import {
  getAuth, 			      // Inicializa auth
  onAuthStateChanged, // Monitora status da auth
  GoogleAuthProvider, // Login → Login com Google
  signInWithPopup,	  // Login → Login com popup
  signInWithRedirect  // Login → Login com redirecionamento
} from 'firebase/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Inicializa core do Firebase.
  app = initializeApp(environment.firebase);

  // Inicializa Authentication.
  auth = getAuth(this.app);

  // Define o provedor de autenticação. Usado no processo de login.
  provider = new GoogleAuthProvider();

  // Loding da página.
  view = false;

  constructor() { }

  ngOnInit() {
    // Monitora status do usuário.
    onAuthStateChanged(this.auth, (user) => {

      // Se usuário está logado, manda para perfil.
      if (user) location.href = '/';
      else this.view = true;
    });
  }

  // Método de login.
  login() {

    // Seleciona o método de login conforme "environment".
    if (environment.signInMethod == 'popup')

      // Login usando popup.
      signInWithPopup(this.auth, this.provider);
    else {

      // Login usando redirect.
      signInWithRedirect(this.auth, this.provider);
    }
  }
}