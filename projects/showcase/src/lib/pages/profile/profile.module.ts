import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {YqSharedModule} from '@yq/core';

import {ProfileService} from './profile.service';
import {ProfileComponent} from './profile.component';
import {ProfileTimelineComponent} from './tabs/timeline/timeline.component';
import {ProfileAboutComponent} from './tabs/about/about.component';
import {ProfilePhotosVideosComponent} from './tabs/photos-videos/photos-videos.component';
import {ProfileFakeDbService} from './profile-fake-db.service';

const routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    resolve: {
      profile: ProfileService
    }
  }
];

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileTimelineComponent,
    ProfileAboutComponent,
    ProfilePhotosVideosComponent
  ],
  imports: [
    HttpClientModule,

    RouterModule.forChild(routes),

    InMemoryWebApiModule.forFeature(ProfileFakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),

    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTabsModule,

    YqSharedModule
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule {
}
