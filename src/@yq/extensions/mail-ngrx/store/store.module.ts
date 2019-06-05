import {StoreModule} from '@ngrx/store';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';

import {reducers} from '@yq/extensions/mail-ngrx/store/reducers';
import {effects} from '@yq/extensions/mail-ngrx/store/effects';

@NgModule({
    imports: [
        StoreModule.forFeature('mail-app', reducers),
        EffectsModule.forFeature(effects)
    ],
    providers: []
})
export class MailNgrxStoreModule {
}
