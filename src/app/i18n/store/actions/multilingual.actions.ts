import { Action } from '@ngrx/store';

export const CHANGE = "[I18N] Change";
export const LANG_CHANGED = "[I18N] Lang Changed";
export const LANG_UNSUPPORTED = "[I18N] Lang Unsupported";

export class ChangeAction implements Action {
    readonly type: string = CHANGE;

    constructor(public payload: string) { }
}

export class LangChangedAction implements Action {
    readonly type: string = LANG_CHANGED;

    constructor(public payload: string) { }ke
}

export class LangUnsupportedAction implements Action {
    readonly type: string = LANG_UNSUPPORTED;

    constructor(public payload: string) { }
}

export type MultilingualActions 
    = ChangeAction 
    | LangChangedAction 
    | LangUnsupportedAction;