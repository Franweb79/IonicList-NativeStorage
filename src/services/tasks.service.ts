import {Injectable} from '@angular/core';
import { Lista } from '../models/lista-model';

import { Storage } from '@ionic/storage';


@Injectable()

export class TasksService{

    public _arrayListas: Lista[]=[];
   

    constructor(public _storage:Storage){
        
     

       
        
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

    /*getters and setters*/

    public get arrayListas(): Lista[] {
        return this._arrayListas;
    }
    public set arrayListas(value: Lista[]) {
        this._arrayListas = value;
    }
}