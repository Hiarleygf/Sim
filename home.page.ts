import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  senha: string = '';
  confirmar: string = '';
  erro: string = '';
  tela: 'senha' | 'opcoes' = 'senha';
  ativo: boolean[] = [false, false, false, false, false];

  verificarSenha() {
    if (!this.senha || !this.confirmar) {
      this.erro = 'Preencha ambos os campos.';
    } else if (this.senha !== this.confirmar) {
      this.erro = 'As senhas não coincidem.';
    } else {
      this.tela = 'opcoes';
      this.erro = '';
    }
  }

  toggle(index: number) {
    this.ativo[index] = !this.ativo[index];
  }
}