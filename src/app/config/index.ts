import {YqConfig} from '@yq/core/types';
import {environment} from 'environments/environment';
import {Routes} from '@angular/router';

/**
 * Default YQBoots Configuration
 *
 * You can edit these options to change the default options. All these options also can be
 * changed per component basis. See `app/main/pages/authentication/login/login.component.ts`
 * constructor method to learn more about changing these options per component basis.
 */
export const yqConfig: YqConfig = {
    // Color themes can be defined in src/app/app.theme.scss
    colorTheme: 'theme-default',
    customScrollbars: true,
    layout: {
        style: 'vertical-layout-1',
        width: 'fullwidth',
        navbar: {
            primaryBackground: 'yq-navy-700',
            secondaryBackground: 'yq-navy-900',
            folded: false,
            hidden: false,
            position: 'left',
            variant: 'vertical-style-1'
        },
        toolbar: {
            customBackgroundColor: false,
            background: 'yq-white-500',
            hidden: false,
            position: 'below-static'
        },
        footer: {
            customBackgroundColor: true,
            background: 'yq-navy-900',
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
        loadChildren: () => import('@yq/extensions/extensions.module').then(m => m.ExtensionsModule)
    });
} else {
    _appRoutes.push({
        path: 'exts',
        loadChildren: () => import('@yq/extensions/extensions.module').then(m => m.ExtensionsModule)
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
        loadChildren: () => import('@showcase/material/materials.module').then(m => m.MaterialsModule)
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
