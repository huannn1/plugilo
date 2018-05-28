import { Injectable } from "@angular/core";
import { Effect, Actions } from '@ngrx/effects';
import * as customListActions from '../actions/custom-lists.actions';
import * as fromServices from '../../services';
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";

@Injectable()
export class CustomListsEffects {
    constructor(
        private actions$: Actions,
        private profileService: fromServices.ProfileService) {

    }

    @Effect()
    loadCustomLists$ =
        this.actions$.ofType(customListActions.LOAD_CUSTOM_LISTS)
            .pipe(
                switchMap(() => {
                    return this.profileService.getCustomLists().pipe(
                        map(customLists => new customListActions.LoadCustomListsSuccess(customLists)),
                        catchError(error => of(new customListActions.LoadCustomListsFail(error)))
                    )
                })
            );
}