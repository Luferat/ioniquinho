import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

// Importa módulo HTTP do Angular.
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  public env = environment;

  // Modela entidade form.
  public form = {
    name: '',
    email: '',
    subject: '',
    message: '',
    date: '',
    status: 'received',
    sended: false
  }

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  ngOnDestroy() { }

  // Processa contato.
  processForm() {

    // Regex simples para validar e-mail.
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/;

    // Valida preenchimento dos campos.
    if (
      this.form.name.trim().length < 3 ||
      !regexEmail.test(this.form.email.trim()) ||
      this.form.subject.trim().length < 3 ||
      this.form.message.trim().length < 5
    ) return false;

    // Gera a data atual no formado ISO.
    const d = new Date();
    this.form.date = d.toISOString().split('.')[0].replace('T', ' ');

    // Salva contato.
    this.sendForm(this.form);

    // Encerra sem fazer mais nada.
    return false;
  }

  // Salva formulário.
  sendForm(formData: any) {

    // Cabeçalho da requisição.
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Envia dados para a API.
    this.http.post(environment.apiURL + '/contacts/.json', formData, { headers }).subscribe(
      (success) => {
        this.form.sended = true;
      },
      (error) => {
        console.error('Erro ao fazer POST:', error);
      }
    );

  }

}