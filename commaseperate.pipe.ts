import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaseperate'
})
export class CommaseperatePipe implements PipeTransform {

  transform(value: any): any {
    if(value === undefined) return ' ';
    let val = String(value);
    let finalval = '';
    let j = 0;
    let flag = 0;
    for(let i=val.length-1;i>-1;i--){
      finalval = val[i] + finalval;
      j++;
      if(val[i] === '.') {j=0;}
      if(j == 3 && i!=0){
        finalval = ','+finalval;
        j = 0;
        flag = 1;
      }
      if(flag == 1 && i!=0 && j==2){
        finalval = ','+finalval;
        j=0;
      }
    }
    return finalval;
  }

}
