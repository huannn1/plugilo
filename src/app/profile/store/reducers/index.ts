
import * as fromState from '../states';
import * as fromReducer from './custom-lists.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface IProfileState {
    customLists: fromState.ICustomListState
}

export const reducers: ActionReducerMap<IProfileState> = {
    customLists: fromReducer.reducer
};

export const getProfileState = createFeatureSelector<IProfileState>('profile');
