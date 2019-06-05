import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {YqSharedModule} from '@yq/core';
import {YqSidebarModule} from '@yq/components';

import {AcademyCoursesComponent} from '@yq/extensions/academy/courses/courses.component';
import {AcademyCourseComponent} from '@yq/extensions/academy/course/course.component';
import {AcademyCoursesService} from '@yq/extensions/academy/courses.service';
import {AcademyCourseService} from '@yq/extensions/academy/course.service';

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
    RouterModule.forChild(routes),

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
