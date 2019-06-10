import {Routes} from '@angular/router';

import {AppConfig} from '@yq/core';

import {environment} from 'environments/environment';

/**
 * Default App Configuration
 */
export const appConfig: AppConfig = {
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

const _appRouteConfigs: Routes = [];
if (environment.production) {
  _appRouteConfigs.push({
    path: 'exts',
    loadChildren: () => import('../main/extensions/extensions.module').then(m => m.ExtensionsModule)
  });
} else {
  _appRouteConfigs.push({
    path: 'exts',
    loadChildren: () => import('../main/extensions/extensions.module').then(m => m.ExtensionsModule)
  });
  _appRouteConfigs.push({
    path: 'pages',
    loadChildren: () => import('@showcase/pages/pages.module').then(m => m.PagesModule)
  });
  _appRouteConfigs.push({
    path: 'ui',
    loadChildren: () => import('@showcase/ui/ui.module').then(m => m.UIModule)
  });
  _appRouteConfigs.push({
    path: 'angular-material-elements',
    loadChildren: () => import('@showcase/material/materials.module').then(m => m.MaterialsModule)
  });
  _appRouteConfigs.push({
    path: 'documentation',
    loadChildren: () => import('@doc/documentation.module').then(m => m.DocumentationModule)
  });
}
_appRouteConfigs.push({
  path: '**',
  redirectTo: 'exts/analytics'
});

export const appRouteConfigs = _appRouteConfigs;
