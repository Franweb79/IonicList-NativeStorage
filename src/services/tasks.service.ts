import {Injectable} from '@angular/core';
import { Lista } from '../models/lista-model';

import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';


@Injectable()

export class TasksService{

    public _arrayListas: Lista[]=[];
   

    constructor(public _storage:Storage,
        public _alerta:AlertController){
        
     

       
        
        /*const lista1:Lista=new Lista('Collect Infinite Stones');
        const lista2:Lista=new Lista('Heroes to be defeated');

        this.arrayListas.push(lista1,lista2);

        console.log(this.arrayListas);
        */
    }

    getStorage()
    {
        let keyToGet:string;
        let stringifiedList:string;
        let parsedToObjectList:Lista;

        this.arrayListas=[];


        for (let i=0;i<localStorage.length;++i)
        {
            keyToGet=localStorage.key(i);

            

           
            stringifiedList=localStorage.getItem(keyToGet);

            

            parsedToObjectList=JSON.parse(stringifiedList);
            

            this.arrayListas.push(parsedToObjectList);


        }

       
    }

    getNativeStorage()
    {
        this.arrayListas=[];


        this._storage.forEach((value, key, index)=>{
           // this.arrayListas.push(value);

           this.arrayListas.push(value);

           
        }).then(data=>{
            console.log("listas con el natiev storage");
            console.log(this._arrayListas);
    
        });

       

       

    }

    deleteList(lista:Lista)
    {
        this._storage.remove(lista._id_list).then(data=>{

            this.getNativeStorage();
            
            console.log(`borrada lista: ${lista._list_title}`);


        });

    }

    editListName(lista:Lista)
    {
        const promptAlert = this._alerta.create({


            title: `New name for list ${lista._list_title}`,
            message: "Enter a new name for this list",
            inputs: [
              {
                name: 'newListName',
                placeholder: 'new name'
              },
            ],
            buttons: [
              {
                text: 'Cancel',
                handler: data => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'Save',
                handler: data => {
                  console.log('Saved clicked');
                this._storage.get(<string>lista._id_list).then( (listReceivedToChangeName:Lista)=>{
                    
                    
                    
                    listReceivedToChangeName._list_title=data.newListName;

                    
                    this._storage.set(listReceivedToChangeName._id_list,listReceivedToChangeName).then(data=>{
                        this.getNativeStorage();//to have new storage with changed lists available on the arrayListas
                    });


                });
                 // this._storage.get(<string>lista._id_list);
                }
              }
            ]

        });//create

        promptAlert.present();
    }


    /*getters and setters*/

    public get arrayListas(): Lista[] {
        return this._arrayListas;
    }
    public set arrayListas(value: Lista[]) {
        this._arrayListas = value;
    }
}