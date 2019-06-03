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

import {FuseSharedModule} from '@fuse/core';
import {FuseSidebarModule} from '@fuse/components';

import {TodoService} from '@fuse/apps/todo/todo.service';
import {TodoComponent} from '@fuse/apps/todo/todo.component';
import {TodoMainSidebarComponent} from '@fuse/apps/todo/sidebars/main/main-sidebar.component';
import {TodoListItemComponent} from '@fuse/apps/todo/todo-list/todo-list-item/todo-list-item.component';
import {TodoListComponent} from '@fuse/apps/todo/todo-list/todo-list.component';
import {TodoDetailsComponent} from '@fuse/apps/todo/todo-details/todo-details.component';

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

        FuseSharedModule,
        FuseSidebarModule
    ],
    providers: [
        TodoService
    ]
})
export class TodoModule {
}
