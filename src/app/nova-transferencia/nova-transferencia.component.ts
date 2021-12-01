import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from 'models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})


export class NovaTransferenciaComponent {

   @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino : string;

  transferir() {

    const valoresParaEmitir: Transferencia = {valor: this.valor, destino: this.destino};

    this.transferenciaService.adicionar(valoresParaEmitir)
    .subscribe((resultado) =>{
      this.LimparCampos();
      this.router.navigateByUrl('extrato');

    },(error)=> console.error('deu ruim') )


  }
  LimparCampos(){
    this.valor = 0;
    this.destino = '0';
  };


  constructor(private transferenciaService: TransferenciaService,
    private router: Router){}
}
