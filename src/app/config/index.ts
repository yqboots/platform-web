import {FuseConfig} from '@fuse/core/types';
import {environment} from 'environments/environment';
import {Routes} from '@angular/router';

/**
 * Default Fuse Configuration
 *
 * You can edit these options to change the default options. All these options also can be
 * changed per component basis. See `app/main/pages/authentication/login/login.component.ts`
 * constructor method to learn more about changing these options per component basis.
 */
export const fuseConfig: FuseConfig = {
    // Color themes can be defined in src/app/app.theme.scss
    colorTheme: 'theme-default',
    customScrollbars: true,
    layout: {
        style: 'vertical-layout-1',
        width: 'fullwidth',
        navbar: {
            primaryBackground: 'fuse-navy-700',
            secondaryBackground: 'fuse-navy-900',
            folded: false,
            hidden: false,
            position: 'left',
            variant: 'vertical-style-1'
        },
        toolbar: {
            customBackgroundColor: false,
            background: 'fuse-white-500',
            hidden: false,
            position: 'below-static'
        },
        footer: {
            customBackgroundColor: true,
            background: 'fuse-navy-900',
            hidden: false,
            position: 'below-fixed'
        },
        sidepanel: {
            hidden: false,
            position: 'right'
        }
    }
};

const _appRoutes: Routes = [];
if (environment.production) {
    _appRoutes.push({
        path: 'exts',
        loadChildren: () => import('@fuse/extensions/extensions.module').then(m => m.ExtensionsModule)
    });
} else {
    _appRoutes.push({
        path: 'exts',
        loadChildren: () => import('@fuse/extensions/extensions.module').then(m => m.ExtensionsModule)
    });
    _appRoutes.push({
        path: 'pages',
        loadChildren: () => import('@showcase/pages/pages.module').then(m => m.PagesModule)
    });
    _appRoutes.push({
        path: 'ui',
        loadChildren: () => import('@showcase/ui/ui.module').then(m => m.UIModule)
    });
    _appRoutes.push({
        path: 'angular-material-elements',
        loadChildren: () => import('@showcase/angular-material-elements/angular-material-elements.module').then(m => m.AngularMaterialElementsModule)
    });
    _appRoutes.push({
        path: 'documentation',
        loadChildren: () => import('@doc/documentation.module').then(m => m.DocumentationModule)
    });
}
_appRoutes.push({
    path: '**',
    redirectTo: 'exts/dashboards/analytics'
});

export const appRoutes = _appRoutes;
