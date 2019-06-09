import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ColorPickerModule} from 'ngx-color-picker';
import {CalendarModule as AngularCalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {YqSharedModule} from '@yq/core';
import {YqConfirmDialogModule} from '@yq/components';

import {CalendarComponent} from '@yq/extensions/calendar/calendar.component';
import {CalendarService} from '@yq/extensions/calendar/calendar.service';
import {CalendarEventFormDialogComponent} from '@yq/extensions/calendar/event-form/event-form.component';
import {CalendarFakeDbService} from './calendar-fake-db.service';

import {environment} from 'environments/environment';

const routes: Routes = [
  {
    path: '**',
    component: CalendarComponent,
    children: [],
    resolve: {
      chat: CalendarService
    }
  }
];

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarEventFormDialogComponent
  ],
  imports: [
    HttpClientModule,

    RouterModule.forChild(routes),

    !environment.production ? InMemoryWebApiModule.forFeature(CalendarFakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }) : [],

    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTooltipModule,

    AngularCalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    ColorPickerModule,

    YqSharedModule,
    YqConfirmDialogModule
  ],
  providers: [
    CalendarService
  ],
  entryComponents: [
    CalendarEventFormDialogComponent
  ]
})
export class CalendarModule {
}
