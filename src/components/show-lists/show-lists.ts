import { Component,Input } from '@angular/core';
import {Lista} from '../../models/lista-model';

import { TasksService } from '../../services/tasks.service';
import { NavController, AlertController } from 'ionic-angular';

import {AddListPage} from '../../pages/add-list/add-list';


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

 @Input() lista:Lista[];

  constructor(public _tareas:TasksService,
    private _navegador:NavController,
    private _alert:AlertController) {
    console.log('Hello ShowListsComponent Component');
    
  }

  editList(lista:Lista)
  {
    console.log(lista);

    console.log(this._tareas.arrayListas);

    this._navegador.push(AddListPage,{

      listToBeEdited:lista
    });

    

  }

  selectedList(lista:Lista)
  {
    console.log(lista);
  }

}
