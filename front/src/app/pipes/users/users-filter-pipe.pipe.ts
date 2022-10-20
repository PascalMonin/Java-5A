import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../../models/user.model';

@Pipe({
  name: 'usersFilterPipe'
})
export class UsersFilterPipePipe implements PipeTransform {

  transform(list: User[], searchText : string): any {
    if(!list)
      return [];
    if(!searchText)
      return list;

    searchText= searchText.toLowerCase();
    list = list.filter(s=>
    {
      return (s.lastName + s.firstName).toLowerCase().includes(searchText);
    })
    return list;
  }

}
