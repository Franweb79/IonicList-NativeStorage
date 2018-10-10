import { Component,Input } from '@angular/core';
import {Lista} from '../../models/lista-model';

/**
 * Generated class for the ShowListsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'show-lists',
  templateUrl: 'show-lists.html'
})
export class ShowListsComponent {

 @Input() arrayListas:Lista[];

  constructor() {
    console.log('Hello ShowListsComponent Component');
    
  }

  selectedList(lista:Lista)
  {
    console.log(lista);
  }

}
