import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(value: any): any {
    moment.locale('es-mx')
    let now = moment().calendar()
    return now;
  }
}
