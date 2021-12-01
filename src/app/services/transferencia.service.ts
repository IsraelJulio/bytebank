import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from 'models/transferencia.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private id = 1;
  private url = 'http://localhost:3000/transferencias';

  private listaTransferencia: any[];

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }
  get transferencias() {
    return this.listaTransferencia;
  }

  TodasTransferencias(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  adicionar(transferencia: Transferencia) {
    this.colocarId(transferencia);
    this.colocarData(transferencia);

    this.listaTransferencia.push(transferencia);
  }
  private colocarId(transferencia: Transferencia) {
    transferencia.id = this.id++;
  }
  private colocarData(transferencia: Transferencia) {
    transferencia.data = new Date();
  }
}
