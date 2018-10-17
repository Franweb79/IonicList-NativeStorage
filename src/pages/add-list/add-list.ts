import { Component, OnInit,OnDestroy } from '@angular/core';

import {Lista} from '../../models/lista-model';
import { ListaItem } from '../../models/lista-item.model';


import { NavParams, AlertController, ViewController, Config, Nav, Platform } from 'ionic-angular';


import { Storage } from '@ionic/storage';
import { ShowTabsService } from '../../services/show-tabs-service';
import { TasksService } from '../../services/tasks.service';




@Component({
  selector: 'page-add-list',
  templateUrl: 'add-list.html',
})


export class AddListPage implements OnInit,OnDestroy {

  private _listToBeManagedOrAdded: Lista;

  private _inputValue: string;

  
 
 
  
  constructor(public _tareas:TasksService,
    private _navParams:NavParams,
    public _alert:AlertController,
    private _storage:Storage,
    private _viewController:ViewController,
    private _tabs:ShowTabsService) {

     

      console.log(this._viewController.name);

      this._tabs.isTabsClickable=false;
      
      //this._tabs.textToEnableTabs=this._viewController.name;

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


  ngOnInit(){

  }

  ngOnDestroy()
  {
    this._tabs.textToEnableTabs="";
    this._tabs.isTabsClickable=true;
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

     

      this.listToBeManagedOrAdded.items.push(newItem);

      //remove the old written value to leave it empty
      this.inputValue=null;

      //set _isCompleted to false because we have a new item without being clicked

      this.listToBeManagedOrAdded._isCompleted=false;

      this.listToBeManagedOrAdded.completedOn=null;

     // this._tareas.arrayListas.push(this.listToBeManagedOrAdded);

     this.addListToStorage(this.listToBeManagedOrAdded).then(data=>{

        this._tareas.getNativeStorage();

     });


    }
    


   

    //this._tareas.arrayListas.push(newItem);
  }

  updateCompletedTask(listToUpdate:Lista,item:ListaItem)
  {
    //console.log ("iscompleted lista:");

    listToUpdate._isCompleted=true; /*we suppose is true and, if any item is not completed,
     set to false*/

    listToUpdate._completedOn=new Date();

    //console.log(listToUpdate.isCompleted);


    
    if(item._isCompleted)
    {
      item._isCompleted=false;
    }
    else
    {
      item._isCompleted=true;
    }

    for(let i=0;i<listToUpdate.items.length;++i)
    {
      if(listToUpdate.items[i]._isCompleted == false)
      {
        listToUpdate._isCompleted=false;
        listToUpdate._completedOn=null;
       // console.log("hay falso");
        break;
      }
    }


    
    this.addListToStorage(listToUpdate).then(data=>{

      /*as addliststorage has an async function inside (storage.set) , and getNativeStorage has an async function inside (storage.forEach),
      in order to show data properly we must wait until storage is correctly added
      by addListToStorage. For that, I created a promise inside that method.

      If not consumed on other calls of the code, is ok.
      */

     this._tareas.getNativeStorage();


    });


    

    /*console.log ("esta es listToUpdate");


    console.log(listToUpdate);

    console.log ("esta es lista array tareas");
    console.log(this._tareas.arrayListas);*/

    //tp update arraytareas with the edited lists*/

    

      /*console.log("listas con el natiev storage");

      
      console.log(this._tareas._arrayListas);*/
    
   
    //this._tareas.getStorage();

   

  }


  deleteItem(item:ListaItem){

    this.listToBeManagedOrAdded.items.splice(this.listToBeManagedOrAdded.items.indexOf(item),1);

    /*we check now if the remaining items are checked or not, cause we

    could have deleted a non clicked item (that means, list.isCompleted=false),
    
    the rest could be clicked, and we must set 

    to completed true in that case*/

    let totalItemsNotCompleted:ListaItem[]=this.listToBeManagedOrAdded.items.filter( (item:ListaItem)=>{

      return item._isCompleted===false;
    });

    if(totalItemsNotCompleted.length==0)
    {
      console.log("no hay más falsos al borrar");

      this.listToBeManagedOrAdded.isCompleted=true;
      this.listToBeManagedOrAdded.createdOn=new Date();
    }
    
    this.addListToStorage(this.listToBeManagedOrAdded).then(data=>{

      this._tareas.getNativeStorage();

    })

    //this._tareas.getStorage();

  }

  addListToStorage(lista:Lista){

    //let stringifiedList:string;

   // stringifiedList=JSON.stringify(lista);
    
   // localStorage.setItem(lista.list_title,stringifiedList);

    //native storage

    


    return new Promise((resolve, reject)=>{

      this._storage.set(lista._id_list,lista);
      resolve();
    });

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
