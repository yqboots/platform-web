import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';

import {YQBoots_CONFIG} from './services';

@NgModule()
export class YqCoreModule {
  constructor(@Optional() @SkipSelf() parentModule: YqCoreModule) {
    if (parentModule) {
      throw new Error('YqCoreModule is already loaded. Import it in the AppModule only!');
    }
  }

  static forRoot(config): ModuleWithProviders {
    return {
      ngModule: YqCoreModule,
      providers: [
        {
          provide: YQBoots_CONFIG,
          useValue: config
        }
      ]
    };
  }
}
