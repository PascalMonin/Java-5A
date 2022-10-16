import { Pipe, PipeTransform } from '@angular/core';
import {Reservation} from '../../models/reservation.model';

@Pipe({
  name: 'reservationsFilterPipe'
})
export class ReservationsFilterPipePipe implements PipeTransform {

  transform(list: Reservation[], searchText : string): any {
    if(!list)
      return [];
    if(!searchText)
      return list;

    searchText= searchText.toLowerCase();
    list = list.filter(s=>
    {
      return s.id.toString().toLowerCase().includes(searchText);
    })
    return list;
  }

}
