import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factorial'
})
export class FactorialPipe implements PipeTransform {

  transform(value:number): number {
    let fact:number=1;
    while(value!=0){
      fact=fact*value;
      value--
    }
    return fact;
  }

}
