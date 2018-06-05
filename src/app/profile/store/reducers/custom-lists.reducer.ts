import * as fromActions from '../actions';
import * as fromStates from '../states';
import { CustomList } from "../../models/custom-list.model";

export function reducer(
    state: fromStates.ICustomListState = fromStates.initialState, 
    action: fromActions.CustomListsAction): fromStates.ICustomListState {

    switch (action.type) {
        case fromActions.LOAD_CUSTOM_LISTS: {
            return {
                ...state,
                loading: true
            };
        }

        case fromActions.LOAD_CUSTOM_LISTS_SUCCESS: {
            var customLists = action.payload;
            const entities = customLists.reduce((entities: { [id: number]: CustomList }, customList) => {
                return {
                    ...entities,
                    [customList.id]: customList
                }
            },
                {
                    ...state.entities
                }
            );

            var returnedData = {
                ...state,
                loading: false,
                loaded: true,
                entities
            };

            return returnedData;
        }

        case fromActions.LOAD_CUSTOM_LISTS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }

    return state;
}

export const getCustomListsEntities = (state: fromStates.ICustomListState) => state.entities;
export const getCustomListsLoading = (state: fromStates.ICustomListState) => state.loading;
export const getCustomListsLoaded = (state: fromStates.ICustomListState) => state.loaded;
