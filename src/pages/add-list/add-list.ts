import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import {Lista} from '../../models/lista-model';
import { NavParams, AlertController } from 'ionic-angular';
import { ListaItem } from '../../models/lista-item.model';


@Component({
  selector: 'page-add-list',
  templateUrl: 'add-list.html',
})
export class AddListPage {

  private _listToBeManagedOrAdded: Lista;

  private _inputValue: string;
 
 
  
  constructor(public _tareas:TasksService,
    private _navParams:NavParams,
    public _alert:AlertController) {

      /*if comes an argument in navparams -although there is no other way to reach this page-,
      */

     // console.log (this._navParams.data.listNameValue); /*or _navParams.get('listNameValue')*/
      
      /*the best to show it and we able to work with the list on this component, is to create 
      a list object and then we can do whatever we want with it, that´s why we created that property
      ne
      letwList on this component, so now: */

      /*if param is listNameValue, we create new list; if param is listToBeEdited, we edit,
      (but don´t push, of course)*/
      if( this._navParams.get('listNameValue'))
      {
        const titulo:string =  this._navParams.get('listNameValue');

        this.listToBeManagedOrAdded=new Lista(titulo);

        console.log("listnamevalue "+ this._navParams.get('listNameValue'));

        this._tareas.arrayListas.push(this.listToBeManagedOrAdded);




      }else if(this._navParams.get('listToBeEdited'))
      {
        /*console.log('list to edit');

        console.log(this._navParams.get('listToBeEdited'));*/

        

        const titulo:string=this._navParams.get('listToBeEdited')._list_title;


        this.listToBeManagedOrAdded=new Lista(titulo);


        let objLista=Object.assign(this.listToBeManagedOrAdded,this._navParams.get('listToBeEdited'));

       
      }




      this.addListToStorage(this.listToBeManagedOrAdded);


  }

 
  

  validateItem()
  {
    //console.log("hola");

   // console.log(event.originalTarget.value);
    //this._tareas.arrayListas.push(this.listToBeManagedOrAdded);

    if(this.inputValue==null || this.inputValue.length===0)
    {
      const alert=this._alert.create({

        title:'Warning',
        subTitle:'You can´t leave empty field',
        buttons:['OK']

      });

      alert.present();
    }
    else{
      const newItem=new ListaItem(this.inputValue);

      console.log ("else");
      console.log (newItem);

      this.listToBeManagedOrAdded.items.push(newItem);

      //remove the old written value to leave it empty
      this.inputValue=null;

     // this._tareas.arrayListas.push(this.listToBeManagedOrAdded);

     this.addListToStorage(this.listToBeManagedOrAdded);


    }
    


   

    //this._tareas.arrayListas.push(newItem);
  }

  updateCompletedTask(listToUpdate:Lista,item:ListaItem)
  {
    if(item.isCompleted)
    {
      item.isCompleted=false;
    }
    else
    {
      item.isCompleted=true;
    }

    this.addListToStorage(listToUpdate);

  }


  deleteItem(item:ListaItem){

    this.listToBeManagedOrAdded.items.splice(this.listToBeManagedOrAdded.items.indexOf(item),1);

    this.addListToStorage(this.listToBeManagedOrAdded);
  }

  addListToStorage(lista:Lista){

    let stringifiedList:string;

    stringifiedList=JSON.stringify(lista);
    
    localStorage.setItem(lista.list_title,stringifiedList);

  }

 

  /*getters and setters*/


  public get listToBeManagedOrAdded(): Lista {
    return this._listToBeManagedOrAdded;
  }
  public set listToBeManagedOrAdded(value: Lista) {
    this._listToBeManagedOrAdded = value;
  }

  public get inputValue(): string {
    return this._inputValue;
  }
  public set inputValue(value: string) {
    this._inputValue = value;
  }
}
