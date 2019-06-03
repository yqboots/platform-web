import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

import {FuseSharedModule} from '@fuse/core';

import {ProfileService} from '@showcase/pages/profile/profile.service';
import {ProfileComponent} from '@showcase/pages/profile/profile.component';
import {ProfileTimelineComponent} from '@showcase/pages/profile/tabs/timeline/timeline.component';
import {ProfileAboutComponent} from '@showcase/pages/profile/tabs/about/about.component';
import {ProfilePhotosVideosComponent} from '@showcase/pages/profile/tabs/photos-videos/photos-videos.component';


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
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatTabsModule,

        FuseSharedModule
    ],
    providers: [
        ProfileService
    ]
})
export class ProfileModule {
}
