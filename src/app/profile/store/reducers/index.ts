
import * as fromCustomLists from './custom-lists.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface ProfileState {
    customLists: fromCustomLists.CustomListState
}

export const reducers: ActionReducerMap<ProfileState> = {
    customLists: fromCustomLists.reducer
};

export const getProfileState = createFeatureSelector<ProfileState>('profile');
export const getCustomListState = createSelector(
    getProfileState, 
    (state: ProfileState) => state.customLists
);
export const getAllCustomLists = createSelector(getCustomListState, fromCustomLists.getCustomLists);
export const getCustomListsLoaded = createSelector(getCustomListState, fromCustomLists.getCustomListsLoaded);
export const getCustomListsLoading = createSelector(getCustomListState, fromCustomLists.getCustomListsLoading);