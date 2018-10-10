import {Injectable} from '@angular/core';
import { Lista } from '../models/lista-model';

@Injectable()

export class TasksService{

    private _arrayListas: Lista[]=[];
   

    constructor(){
        
     

       
        
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


        for (let i=0;i<localStorage.length;++i)
        {
            keyToGet=localStorage.key(i);

            

           
            stringifiedList=localStorage.getItem(keyToGet);

            

            parsedToObjectList=JSON.parse(stringifiedList);
            

            this.arrayListas.push(parsedToObjectList);


        }

       
    }

    /*getters and setters*/

    public get arrayListas(): Lista[] {
        return this._arrayListas;
    }
    public set arrayListas(value: Lista[]) {
        this._arrayListas = value;
    }
}