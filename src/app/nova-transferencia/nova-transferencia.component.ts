import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})


export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino : number;

  transferir() {

    const valoresParaEmitir = {valor: this.valor, destino: this.destino};

    this.aoTransferir.emit(valoresParaEmitir);

    this.LimparCampos();
  }
  LimparCampos(){
    this.valor = 0;
    this.destino = 0;
  };
}
