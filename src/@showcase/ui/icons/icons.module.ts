import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {FuseSharedModule} from '@fuse/core';

import {IconsComponent} from '@showcase/ui/icons/icons.component';

const routes: Routes = [
    {
        path: 'icons',
        component: IconsComponent
    }
];

@NgModule({
    declarations: [
        IconsComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,

        FuseSharedModule
    ]
})
export class UIIconsModule {
}
