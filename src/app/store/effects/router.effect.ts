import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import * as RouterActions from 'app/store/actions/router.action';

@Injectable()
export class RouterEffects {
    constructor(private actions$: Actions,
                private router: Router,
                private location: Location) {
    }

    /**
     * Navigate
     */
    @Effect({dispatch: false})
    navigate$: Observable<any> = this.actions$.pipe(
        ofType(RouterActions.GO),
        map((action: RouterActions.Go) => action.payload),
        tap(({path, query: queryParams, extras}) => {
            this.router.navigate(path, {...queryParams, ...extras});
        })
    );

    /**
     * Navigate back
     */
    @Effect({dispatch: false})
    navigateBack$: Observable<any> = this.actions$.pipe(
        ofType(RouterActions.BACK),
        tap(() => this.location.back())
    );

    /**
     * Navigate forward
     */
    @Effect({dispatch: false})
    navigateForward$: Observable<any> = this.actions$.pipe(
        ofType(RouterActions.FORWARD),
        tap(() => this.location.forward())
    );
}
