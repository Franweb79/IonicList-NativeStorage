import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { PendingTasksPage } from '../pages/pending-tasks/pending-tasks';
import { FinishedTasksPage } from '../pages/finished-tasks/finished-tasks';
import {AddListPage} from '../pages/add-list/add-list';

import {ShowListsComponent} from '../components/show-lists/show-lists';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TasksService } from '../services/tasks.service';
import {CookiesService} from '../services/cookies-service';
import { ShowTabsService } from '../services/show-tabs-service';


//pipes

import {IsCompletedOrNotFilterPipe} from '../pipes/is-completed-or-not-filter/is-completed-or-not-filter'


@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    TabsPage,
    PendingTasksPage,
    FinishedTasksPage,
    AddListPage,
    ShowListsComponent,
    IsCompletedOrNotFilterPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    TabsPage,
    PendingTasksPage,
    FinishedTasksPage,
    AddListPage,
    ShowListsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TasksService,
    CookiesService,
    ShowTabsService
  ]
})
export class AppModule {}
