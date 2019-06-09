import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {YqSharedModule} from '@yq/core';
import {YqSidebarModule} from '@yq/components';

import {AcademyCoursesComponent} from '@yq/extensions/academy/courses/courses.component';
import {AcademyCourseComponent} from '@yq/extensions/academy/course/course.component';
import {AcademyCoursesService} from '@yq/extensions/academy/courses.service';
import {AcademyCourseService} from '@yq/extensions/academy/course.service';

import {AcademyFakeDbService} from './academy-fake-db.service';
import {environment} from 'environments/environment';

const routes = [
  {
    path: 'courses',
    component: AcademyCoursesComponent,
    resolve: {
      academy: AcademyCoursesService
    }
  },
  {
    path: 'courses/:courseId/:courseSlug',
    component: AcademyCourseComponent,
    resolve: {
      academy: AcademyCourseService
    }
  },
  {
    path: '**',
    redirectTo: 'courses'
  }
];

@NgModule({
  declarations: [
    AcademyCoursesComponent,
    AcademyCourseComponent
  ],
  imports: [
    HttpClientModule,

    RouterModule.forChild(routes),

    !environment.production ? InMemoryWebApiModule.forFeature(AcademyFakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }) : [],

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,

    YqSharedModule,
    YqSidebarModule
  ],
  providers: [
    AcademyCoursesService,
    AcademyCourseService
  ]
})
export class AcademyModule {
}
