import { Action } from "@ngrx/store";
import { CustomList } from '../../models/custom-list.model';

export const LOAD_CUSTOM_LISTS = '[Profile] Load Custom Lists ';
export const LOAD_CUSTOM_LISTS_FAIL = '[Profile] Load Custom Lists Fail';
export const LOAD_CUSTOM_LISTS_SUCCESS = '[Profile] Load Custom Lists Success';

export class LoadCustomLists implements Action {
    readonly type: string = LOAD_CUSTOM_LISTS;
}

export class LoadCustomListsFail implements Action {
    readonly type: string = LOAD_CUSTOM_LISTS_FAIL;
    constructor(public payload: any) { }
}

export class LoadCustomListsSuccess implements Action {
    readonly type: string = LOAD_CUSTOM_LISTS_SUCCESS;
    constructor(public payload: CustomList[]) { }
}

// Action Types
export type CustomListsAction = LoadCustomLists | LoadCustomListsFail | LoadCustomListsSuccess;