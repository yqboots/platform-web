import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRippleModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {YqSharedModule} from '@yq/core';
import {YqConfirmDialogModule, YqSidebarModule} from '@yq/components';

import {ContactsComponent} from '@yq/extensions/contacts/contacts.component';
import {ContactsService} from '@yq/extensions/contacts/contacts.service';
import {ContactsContactListComponent} from '@yq/extensions/contacts/contact-list/contact-list.component';
import {ContactsSelectedBarComponent} from '@yq/extensions/contacts/selected-bar/selected-bar.component';
import {ContactsMainSidebarComponent} from '@yq/extensions/contacts/sidebars/main/main.component';
import {ContactsContactFormDialogComponent} from '@yq/extensions/contacts/contact-form/contact-form.component';
import {ContactsFakeDbService} from './contacts-fake-db.service';

import {environment} from 'environments/environment';

const routes: Routes = [
  {
    path: '**',
    component: ContactsComponent,
    resolve: {
      contacts: ContactsService
    }
  }
];

@NgModule({
  declarations: [
    ContactsComponent,
    ContactsContactListComponent,
    ContactsSelectedBarComponent,
    ContactsMainSidebarComponent,
    ContactsContactFormDialogComponent
  ],
  imports: [
    HttpClientModule,

    RouterModule.forChild(routes),

    !environment.production ? InMemoryWebApiModule.forFeature(ContactsFakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }) : [],

    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRippleModule,
    MatTableModule,
    MatToolbarModule,

    YqSharedModule,
    YqConfirmDialogModule,
    YqSidebarModule
  ],
  providers: [
    ContactsService
  ],
  entryComponents: [
    ContactsContactFormDialogComponent
  ]
})
export class ContactsModule {
}
