import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { PendingTasksPage } from '../pending-tasks/pending-tasks';
import { FinishedTasksPage } from '../finished-tasks/finished-tasks';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendingTasksPage;
  tab2Root = FinishedTasksPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
