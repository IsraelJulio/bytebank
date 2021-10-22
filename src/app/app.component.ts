import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  id = 1;
  title = 'bytebank';
  Transferencia: any[] = [];


  tranferirParaAppComponent($event: any) {

    const addId = {...$event,id:this.id++};

    this.Transferencia.push(addId);
  }
}

