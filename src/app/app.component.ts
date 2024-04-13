import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejemplo1Directive } from './directivas/ejemplo1.directive';
import { CommonModule } from '@angular/common';
import { EjemploestructuraDirective } from './directivas/ejemploestructura.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practicar-angular';
  isBlue = 'red'
  Red = true
}
