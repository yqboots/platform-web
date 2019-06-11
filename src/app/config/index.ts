import {Routes} from '@angular/router';

import {AppConfig} from '@yq/core';

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
_appRouteConfigs.push({
  path: 'exts',
  loadChildren: () => import('../main/extensions/extensions.module').then(m => m.ExtensionsModule)
});
_appRouteConfigs.push({
  path: '**',
  redirectTo: 'exts/analytics'
});

export const appRouteConfigs = _appRouteConfigs;
