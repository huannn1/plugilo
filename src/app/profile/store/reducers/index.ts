
import * as fromCustomLists from './custom-lists.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface IProfileState {
    customLists: fromCustomLists.ICustomListState
}

export const reducers: ActionReducerMap<IProfileState> = {
    customLists: fromCustomLists.reducer
};

export const getProfileState = createFeatureSelector<IProfileState>('profile');
