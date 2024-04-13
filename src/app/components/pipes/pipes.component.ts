import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversoPipe } from '../../pipes/reverso.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, ReversoPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  constructor(){}

  DataExample = 
  [
    {
      nombre:"Michel Cardenas",
      edad: 24.022222,
      fecha: new Date(),
      colorfavorito:"Rojo"
    },
    {
      nombre:"Alexander Parra",
      edad: 30.6444444,
      fecha: new Date(),
      colorfavorito:"Azul"
    },
    {
      nombre:"Jacqueline Uzcategui",
      edad: 40.111111,
      fecha: new Date(),
      colorfavorito:"Rosado"
    },
    {
      nombre:"Cristobal Colon",
      edad: 40.33333,
      fecha: new Date(),
      colorfavorito:"Lila"
    }
  ]

}
