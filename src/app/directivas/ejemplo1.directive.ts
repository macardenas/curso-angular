import { Directive, ElementRef, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appEjemplo1]',
  standalone: true
})
export class Ejemplo1Directive {

 element : ElementRef<HTMLInputElement> = inject(ElementRef)

  constructor(private renderer: Renderer2) { 
    console.log("Directive Angular :::::::::::")
    //this.element.nativeElement.style.backgroundColor="green"

    renderer.setStyle(this.element.nativeElement,"background-color","green")
  }

}
