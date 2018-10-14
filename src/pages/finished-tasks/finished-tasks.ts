import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

import {Lista} from '../../models/lista-model';



import { NavController } from 'ionic-angular';

import {AddListPage} from '../../pages/add-list/add-list';



/**
 * Generated class for the FinishedTasksComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'finished-tasks',
  templateUrl: 'finished-tasks.html',
})
export class FinishedTasksPage {


  constructor(public _tareas:TasksService,
    private _navegador:NavController,) {
    console.log('Hello FinishedTasksComponent Component');
   
  }

  editList(lista:Lista)
  {
    console.log(lista);

    console.log(this._tareas.arrayListas);

    this._navegador.push(AddListPage,{

      listToBeEdited:lista
    });

    

  }

}
