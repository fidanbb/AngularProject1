import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, a:number,b:number): string {
    //this is function that transforms the value pipe used
   
    return  value.slice(a,b);  
  }

}
