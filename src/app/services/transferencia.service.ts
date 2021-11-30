import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  id = 1;
  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }
  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any) {
    this.colocarId(transferencia);
    this.colocarData(transferencia);

    this.listaTransferencia.push(transferencia);
  }
  private colocarId(transferencia: any) {
    transferencia.Id = this.id++;
  }
  private colocarData(transferencia: any) {
    transferencia.data = new Date();
  }
}
