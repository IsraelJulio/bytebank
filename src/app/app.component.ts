import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'bytebank';
  Transferencia: any;

  tranferirParaAppComponent($event: any) {
    this.Transferencia = $event;
  }
}

