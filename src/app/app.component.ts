import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import {CookiesService} from '../services/cookies-service';
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private _cookiesService:CookiesService,
    private _alertService:AlertController,
    private _storage:Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

   /* console.log("native storage");

    
    this._storage.set('testKey', 'Testvalue');

    this._storage.get('testKey').then((val) => {
      console.log(`the value os testKey is ${val}`);
    });*/
   
    
    if(this._cookiesService.getCookie('showedInstructions')=="no cookie is setted")
    {
      //show alert
      this.showInstructionsAlert();

      
    }
   /* else if(this._cookiesService.getCookie('showedInstructions')=="yes")
    {
      console.log ("cookie seteada");
      //nothing, this else if will be deleted
    }
*/
    //this._cookiesService.setCookie('showedInstructions','yes');
  } //constructor




  showInstructionsAlert()
  {
    const alert=this._alertService.create({
      title: 'Instructions',
      subTitle: `<ul><li><strong>Slide lists or tasks to the left to delete them</strong></li>
        <li><strong>Slide lists to the right to edit their name</strong></li>
      </ul>`,
      buttons: [ {
        text: 'Ok',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text:'Don´t show again',
        handler: data => {

          this._cookiesService.setCookie('showedInstructions','yes');


        }
      }
      ]

      
    });//create

    alert.present();
  }


    
  
}
