import { ListaItem } from "./lista-item.model";

/*this is the model for the lists itself; it will be an array of lista-items*/

export class Lista{
    private _id_list: number;
   
    private _list_title: string;
    
    private _createdOn: Date;
    
    private _completedOn: Date;
    
    private _isCompleted: boolean;
  
    private _items: ListaItem[];
    

    /*we pass as parameter only the title, the rest of the properties can be generated*/
    
    constructor(p_list_title:string){

        this.list_title=p_list_title;

        this.isCompleted=false;
        this.createdOn=new Date();
        this.items=[]; /*empty, cause we have still no items when creating the list*/

        /*as we have no database this time, we will add it creating a random number added yo the number
        
        generated by now() to ensure it is a unique id*/
        this.id_list=Date.now() + Math.floor((Math.random() * 100) + 1);


    }

    /*getters and setters*/

    public get id_list(): number {
        return this._id_list;
    }
    public set id_list(value: number) {
        this._id_list = value;
    }

    public get list_title(): string {
        return this._list_title;
    }
    public set list_title(value: string) {
        this._list_title = value;
    }
    public get createdOn(): Date {
        return this._createdOn;
    }
    public set createdOn(value: Date) {
        this._createdOn = value;
    }
    public get completedOn(): Date {
        return this._completedOn;
    }
    public set completedOn(value: Date) {
        this._completedOn = value;
    }
    public get isCompleted(): boolean {
        return this._isCompleted;
    }
    public set isCompleted(value: boolean) {
        this._isCompleted = value;
    }
    public get items(): ListaItem[] {
        return this._items;
    }
    public set items(value: ListaItem[]) {
        this._items = value;
    }

}