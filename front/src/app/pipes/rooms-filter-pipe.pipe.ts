import { Pipe, PipeTransform } from '@angular/core';
import {Room} from '../models/room.model';

@Pipe({
  name: 'roomsFilterPipe'
})
export class RoomsFilterPipePipe implements PipeTransform {

  transform(list: Room[],searchText:string): any {
    if(!list)
      return [];
    if(!searchText)
      return list;

    searchText= searchText.toLowerCase();
    list = list.filter(s=>
    {
      return s.nom.toLowerCase().includes(searchText);
    })
    return list;
  }

}
