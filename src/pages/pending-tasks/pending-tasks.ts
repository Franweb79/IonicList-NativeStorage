import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import {Lista} from '../../models/lista-model';
import { NavController, AlertController } from 'ionic-angular';
import {AddListPage} from '../add-list/add-list';

/**
 * Generated class for the PendingTasksComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pending-tasks',
  templateUrl: 'pending-tasks.html'
})
export class PendingTasksPage {


  constructor(public _tareas:TasksService,
    private _navegador:NavController,
    private _alert:AlertController) {
   
      console.log("soy el constructor");
    this._tareas.getStorage();
  }

  editList(lista:Lista)
  {
    console.log(lista);

    console.log(this._tareas.arrayListas);

    this._navegador.push(AddListPage,{

      listToBeEdited:lista
    });

    

  }

  /*we must navigate to the add list page to add list. ionic offers us a navigation system called 
  navcontroller*/
  agregarLista()
  {
    /*it is push because we are like adding a new page/component to the navigation stack */
   // this._navegador.push(AddListPage);

    const alerta = this._alert.create({
      title: 'New list',
      message: "Enter a name for your new list",
      inputs: [
        {
          name: 'listName', //this name will be used to get the input value
          placeholder: 'List name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
         /* handler: data => { 
            console.log('Cancel clicked');
          }*/
        },
        {
          text: 'Save',
          //handler is the function that will be fired whern button is pressed
          //data is an object with the input value usan as key, what specified on inputs name
          handler: data => {

            if(data.listName.length === 0)//because if inout is empty, then "" will be value and we want to avoid that
            {
              return; /*does nothing, AKA ends agregarLista method
              https://stackoverflow.com/questions/6183668/question-about-if-statement-in-function-in-javascript-how-if-the-if-statement*/

            }
            else
            {
              // console.log(data); //output object {listName: "value-of-input"}
             
              //this._tareas.arrayListas.push(new Lista(data.listName));
             

              /*in an object, we send the value of the input to the next view 
              (addlistpage), we will be able to get it with the navParams service there
              
              */

              this._navegador.push(AddListPage,{
                listNameValue : data.listName
              });
            }
          }
        }
    ]});//ecreate
      
    
    alerta.present();


  }//agregarLista

}