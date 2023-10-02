import { Action } from './actions';

export interface FavouriteState {
    favouritePhoto: string[];
}

const initialState = {
    favouritePhoto: [],
};

export const favouritesReducer = (
    state: FavouriteState = initialState,
    action: Action
) => {
    switch (action.type) {
        case 'ADD_FAVOURITE': {
            return {
                ...state,
                favouritePhoto: [...state.favouritePhoto, action.payload],
            };
        }
        default:
            return state;
    }
};
