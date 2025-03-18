import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  texto: string = '';
  textoInvertido: string = '';
  imgSrc: string = 'idle.svg';
  alert: any = { type: 'secondary', message: 'Digite uma palavra' };

  checkPalindromo() {
    if (this.texto === '') {
      this.alert = { type: 'secondary', message: 'Digite uma palavra' };
      this.imgSrc = 'idle.svg';
      return;
    }
    this.inverter();
    if (this.texto === this.textoInvertido) {
      this.alert = { type: 'success', message: 'É um palindromo' };
      this.imgSrc = 'happy.svg';
    } else {
      this.alert = { type: 'danger', message: 'Não é um palindromo' };
      this.imgSrc = 'sad.svg';
    }
  }

  inverter() {
    this.texto = this.texto.trim().toLowerCase();
    if (this.texto.split('').includes(' ')) {
    } else this.textoInvertido = this.texto.split('').reverse().join('');
  }
}
