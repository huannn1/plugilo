import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { AuthService } from "../../auth.service";
import { AuthActions } from "../actions/auth.actions";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthenticationEffects {
    constructor(
        private action$: Actions,
        private authService: AuthService,
        private authActions: AuthActions
    ) {

    }

    // @Effect()
    // Authenticated$: Observable<Action> = this.action$
    //     .ofType(AuthActions.AUTHORIZE)
    //     .switchMap();
}