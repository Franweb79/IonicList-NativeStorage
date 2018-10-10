
/*model for the items on the list*/
export class ListaItem{
    private _description: string;
  
    private _isCompleted: boolean;
    

    constructor( p_description:string){
        this.description=p_description;
        this.isCompleted=false;/*because when i create one list they are not completed*/
        
    }

    

    /*getters and setters*/

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    public get isCompleted(): boolean {
        return this._isCompleted;
    }
    public set isCompleted(value: boolean) {
        this._isCompleted = value;
    }

    
}