import { Directive , Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[estructural]',
  standalone: true
})
export class EjemploestructuraDirective {

  private template= inject(TemplateRef)
  private viewContainer= inject(ViewContainerRef)

  constructor() { }


  @Input() set appNot(condition: boolean) {

    if(!condition){
      this.viewContainer.createEmbeddedView(this.template);
    }else{
      this.viewContainer.clear(); 
    }
  }

}
