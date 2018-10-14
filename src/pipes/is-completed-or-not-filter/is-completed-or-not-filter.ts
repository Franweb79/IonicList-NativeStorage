import { Pipe, PipeTransform } from '@angular/core';

import {Lista} from '../../models/lista-model'

/**
 * Generated class for the IsCompletedOrNotFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'isCompletedOrNotFilter',
  pure:false
})
export class IsCompletedOrNotFilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(listas:Lista[], isCompleted:boolean) {
    return listas.filter(lista=>{
      return lista._isCompleted===isCompleted;

      
    });

    /*tambien 
    
    return listas.filter(lista=>lista._isCompleted===isCompleted ); 
    
    asi no hace falte el return dentro del callback
    */
  }
}
