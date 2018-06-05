import { environment } from './../environments/environment';
import * as fromAuth from './auth/store/states/auth.state';
import * as fromRouter from '@ngrx/router-store';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers, ActionReducer, ActionReducerMap, MetaReducer, createFeatureSelector } from '@ngrx/store';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';
import { AuthState } from "./auth/store/states/auth.state";
import { IMultilingualState } from './i18n/store/states/multilingual.state';
import { Params, RouterState, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

// This should hold the AppState interface
// Ideally importing all the substate for the application

/**
 *
 *
 * @export
 * @interface IAppState
 */

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface IAppState {
  // auth: AuthState;
  // i18n: IMultilingualState,
  // router: fromRouter.RouterReducerState
}

export const appReducers: ActionReducerMap<IAppState> = {
  // auth: AuthState,
  // i18n: fromI18n,
  // router: fromRouter.routerReducer
};

// console.log all actions
export function logger(reducer: ActionReducer<IAppState>): ActionReducer<any, any> {
  return function (state: IAppState, action: any): IAppState {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? [logger]
  : [];

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('router')

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {

  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }

    const { params } = state;

    return { url, queryParams, params };
  }
}