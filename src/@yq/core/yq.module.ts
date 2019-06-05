import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';

import {YQBoots_CONFIG} from '@yq/core';

@NgModule()
export class YqModule {
  constructor(@Optional() @SkipSelf() parentModule: YqModule) {
    if (parentModule) {
      throw new Error('YqModule is already loaded. Import it in the AppModule only!');
    }
  }

  static forRoot(config): ModuleWithProviders {
    return {
      ngModule: YqModule,
      providers: [
        {
          provide: YQBoots_CONFIG,
          useValue: config
        }
      ]
    };
  }
}
