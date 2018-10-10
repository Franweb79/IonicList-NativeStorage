import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {Lista} from '../../models/lista-model'

/**
 * Generated class for the EditListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-edit-list',
  templateUrl: 'edit-list.html',
})
export class EditListPage {

  private _listToBeEdited: Lista;
  

  
  constructor(public _navCtrl: NavController, public _navParams: NavParams) {

    this.listToBeEdited=this._navParams.get('listToBeEdited');
    console.log(this.listToBeEdited);
  }

  /*gettes and setters*/

  public get listToBeEdited(): Lista {
    return this._listToBeEdited;
  }
  public set listToBeEdited(value: Lista) {
    this._listToBeEdited = value;
  }

 

}
