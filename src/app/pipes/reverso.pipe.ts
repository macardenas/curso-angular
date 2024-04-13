import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverso',
  standalone: true
})
export class ReversoPipe implements PipeTransform {

  transform(value: string): string {
    
    
    return value.split("").reverse().join("");;
  }

}
