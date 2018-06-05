import { CustomList } from "../../models/custom-list.model";

export interface ICustomListState {
    // data: CustomList[],
    entities: { [id: number]: CustomList }
    loaded: boolean;
    loading: boolean
}

export const initialState: ICustomListState = {
    entities: {},
    loaded: false,
    loading: false
}