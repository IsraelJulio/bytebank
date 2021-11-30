import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  tranferirParaAppComponent($event: any) {
    // const addId = {...$event,id:this.id++};
    // this.Transferencia.push(addId);
    this.transferenciaService.adicionar($event);
  }
  constructor(private transferenciaService: TransferenciaService) {}
}
