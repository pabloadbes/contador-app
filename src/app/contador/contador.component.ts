import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h3>El paso es 
            <button (click)=" incrementarPaso( 1 ) ">+ {{ 1 }}</button>
            <strong>{{ paso }}</strong>
            <button (click)=" incrementarPaso( -1 )">- {{ 1}}</button>
        </h3>

        <h2>Contador</h2>
        <button (click)=" incrementar( paso ) ">+ {{ paso }}</button>
        <span>{{ numero }}</span>
        <button (click)=" incrementar( -paso )">- {{ paso}}</button>
    `
})
export class ContadorComponent {
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public paso: number = 5;
  
    incrementar( valor: number ) {
        this.numero += valor;
      }
    incrementarPaso( valor: number ) {
        this.paso += valor;
      }
  }