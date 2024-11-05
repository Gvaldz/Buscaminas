import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  minas = 7; 
  tamañoTablero = this.minas * this.minas;
  tablero: any[] = [];

  ngOnInit() {
    this.generarTablero();
  }

  generarTablero() {
    this.tablero = Array.from({ length: this.tamañoTablero }, () => ({ mina: false, revelado: false }));
    
    let minasColocadas = 0;
    while (minasColocadas < this.minas) {
      const posicion = Math.floor(Math.random() * this.tamañoTablero);
      if (!this.tablero[posicion].mina) {
        this.tablero[posicion].mina = true; 
        minasColocadas++;
      }
      console.log(this.tablero)
    }
  }

  revelarCuadro(index: number) {
    if (this.tablero[index].mina) {
      this.tablero[index].revelado = true;
      alert('Perdiste');
      this.generarTablero(); 
    } else {
      this.tablero[index].revelado = true;
      this.calcularBombas(index)
    }
  }

  calcularBombas(index: number){
    if(this.tablero[index-1].mina){
      alert('Hay una mina cerca')
    } 
  }
}
