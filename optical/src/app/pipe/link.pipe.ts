import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Transformlinks'
})
export class LinkPipe implements PipeTransform {
  transform(value: string): string {
    if(value.includes(' ') || value.includes('&')){
      value=value.replace(" ",'-')
      value=value.replace("&",'-')
    }
    return value;
  }
}
