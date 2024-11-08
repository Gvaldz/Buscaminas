import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cuadro',
  templateUrl: './cuadro.component.html',
  styleUrls: ['./cuadro.component.css']
})
export class CuadroComponent {
  @Input() cuadro: { mina: boolean; revelado: boolean } | undefined;
}
