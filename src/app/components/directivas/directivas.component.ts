import { Component } from '@angular/core';
import { Ejemplo1Directive } from '../../directivas/ejemplo1.directive';
import { CommonModule } from '@angular/common';
import { EjemploestructuraDirective } from '../../directivas/ejemploestructura.directive';

@Component({
  selector: 'app-directivas',
  standalone: true,
  imports: [Ejemplo1Directive,CommonModule,EjemploestructuraDirective],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {
  isBlue = 'red';
  Red = true;
}
