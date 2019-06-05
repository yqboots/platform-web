import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRippleModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {NgxDnDModule} from '@swimlane/ngx-dnd';

import {YqSharedModule} from '@yq/core';
import {YqSidebarModule} from '@yq/components';

import {TodoService} from '@yq/extensions/todo/todo.service';
import {TodoComponent} from '@yq/extensions/todo/todo.component';
import {TodoMainSidebarComponent} from '@yq/extensions/todo/sidebars/main/main-sidebar.component';
import {TodoListItemComponent} from '@yq/extensions/todo/todo-list/todo-list-item/todo-list-item.component';
import {TodoListComponent} from '@yq/extensions/todo/todo-list/todo-list.component';
import {TodoDetailsComponent} from '@yq/extensions/todo/todo-details/todo-details.component';

const routes: Routes = [
  {
    path: 'all',
    component: TodoComponent,
    resolve: {
      todo: TodoService
    }
  },
  {
    path: 'all/:todoId',
    component: TodoComponent,
    resolve: {
      todo: TodoService
    }
  },
  {
    path: 'tag/:tagHandle',
    component: TodoComponent,
    resolve: {
      todo: TodoService
    }
  },
  {
    path: 'tag/:tagHandle/:todoId',
    component: TodoComponent,
    resolve: {
      todo: TodoService
    }
  },
  {
    path: 'filter/:filterHandle',
    component: TodoComponent,
    resolve: {
      todo: TodoService
    }
  },
  {
    path: 'filter/:filterHandle/:todoId',
    component: TodoComponent,
    resolve: {
      todo: TodoService
    }
  },
  {
    path: '**',
    redirectTo: 'all'
  }
];

@NgModule({
  declarations: [
    TodoComponent,
    TodoMainSidebarComponent,
    TodoListItemComponent,
    TodoListComponent,
    TodoDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRippleModule,
    MatSelectModule,

    NgxDnDModule,

    YqSharedModule,
    YqSidebarModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule {
}
