import { createSelector } from "@ngrx/store";
import * as fromFeature from '../reducers';
import * as fromCustomLists from '../reducers/custom-lists.reducer';

export const getCustomListState = createSelector(
    fromFeature.getProfileState, 
    (state: fromFeature.IProfileState) => state.customLists
);
export const getAllCustomListsEntities = createSelector(getCustomListState, fromCustomLists.getCustomListsEntities);
export const getAllCustomLists = createSelector(getAllCustomListsEntities, (entities) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});
export const getCustomListsLoaded = createSelector(getCustomListState, fromCustomLists.getCustomListsLoaded);
export const getCustomListsLoading = createSelector(getCustomListState, fromCustomLists.getCustomListsLoading);