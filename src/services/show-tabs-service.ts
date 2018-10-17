import {Injectable} from '@angular/core';

@Injectable()

export class ShowTabsService{

   /*string to disable tabs when we are on list editing page,

   this way we force to use arrow to go back*/
    private _textToEnableTabs: String;

    private _isTabsClickable: boolean;
   

    constructor()
    {
        this.isTabsClickable=true;
        this.textToEnableTabs=""; /*value will change on the addList.ts constructor and on its onDestroy, to make tabs available again*/
    }




    /*getters and setters*/


    public get textToEnableTabs(): String {
        return this._textToEnableTabs;
    }
    public set textToEnableTabs(value: String) {
        this._textToEnableTabs = value;
    }

    public get isTabsClickable(): boolean {
        return this._isTabsClickable;
    }
    public set isTabsClickable(value: boolean) {
        this._isTabsClickable = value;
    }

}