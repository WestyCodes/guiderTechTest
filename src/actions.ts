export type Action = { type: 'ADD_FAVOURITE'; payload: string };

export const addFavourite = (favouritePhoto: string): Action => ({
    type: 'ADD_FAVOURITE',
    payload: favouritePhoto,
});
