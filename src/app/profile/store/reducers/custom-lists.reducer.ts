import * as fromCustomLists from '../actions/custom-lists.actions';
import { CustomList } from "../../models/custom-list.model";

export interface CustomListState {
    data: CustomList[],
    loaded: boolean;
    loading: boolean
}

// export const samples: CustomList[] = [
    // { id: 1, name: 'Seaside Surfin' },
    // { id: 2, name: 'Sunny day' },
    // { id: 3, name: 'Poppy blo' }
// ]

export const initialState: CustomListState = {
    data: [],
    loaded: false,
    loading: false
}

export function reducer(state = initialState, action: fromCustomLists.CustomListsAction): CustomListState {
    switch (action.type) {
        case fromCustomLists.LOAD_CUSTOM_LISTS: {
            return {
                ...state,
                loading: true
            };
        }

        case fromCustomLists.LOAD_CUSTOM_LISTS_SUCCESS: {
            var data = action.payload;
            var returnedData = {
                ...state,
                loading: false,
                loaded: true,
                data
            };
            debugger;
            return returnedData;
        }

        case fromCustomLists.LOAD_CUSTOM_LISTS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }

    return state;
}

export const getCustomListsLoading = (state:CustomListState) => state.loading;
export const getCustomListsLoaded = (state:CustomListState) => state.loaded;
export const getCustomLists = (state:CustomListState) => state.data;