import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';


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


  constructor(public _tareas:TasksService) {
    console.log('Hello FinishedTasksComponent Component');
   
  }

}
