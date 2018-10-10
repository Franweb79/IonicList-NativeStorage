import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { PendingTasksPage } from '../pages/pending-tasks/pending-tasks';
import { FinishedTasksPage } from '../pages/finished-tasks/finished-tasks';
import {AddListPage} from '../pages/add-list/add-list';

import {ShowListsComponent} from '../components/show-lists/show-lists';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TasksService } from '../services/tasks.service';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    TabsPage,
    PendingTasksPage,
    FinishedTasksPage,
    AddListPage,
    ShowListsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    TasksService
  ]
})
export class AppModule {}
