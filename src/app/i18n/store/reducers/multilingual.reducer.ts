import * as fromActions from '../actions';
import * as fromStates from '../states';

export function reducer(
    state: fromStates.IMultilingualState = fromStates.initialState,
    action: fromActions.MultilingualActions): fromStates.IMultilingualState {

    switch (action.type) {
        case fromActions.LANG_CHANGED: {
            if (state.lang !== action.payload)
                return { ...state, lang: action.payload };
            return state;
        }
    }

    return state;
}

export const getLang = (state: fromStates.IMultilingualState) => state.lang;
