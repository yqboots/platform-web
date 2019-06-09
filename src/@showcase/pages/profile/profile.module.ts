import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {YqSharedModule} from '@yq/core';

import {ProfileService} from '@showcase/pages/profile/profile.service';
import {ProfileComponent} from '@showcase/pages/profile/profile.component';
import {ProfileTimelineComponent} from '@showcase/pages/profile/tabs/timeline/timeline.component';
import {ProfileAboutComponent} from '@showcase/pages/profile/tabs/about/about.component';
import {ProfilePhotosVideosComponent} from '@showcase/pages/profile/tabs/photos-videos/photos-videos.component';
import {ProfileFakeDbService} from './profile-fake-db.service';

import {environment} from 'environments/environment';

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

    !environment.production ? InMemoryWebApiModule.forFeature(ProfileFakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }) : [],

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
