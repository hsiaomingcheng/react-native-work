/*
* action type
*/
export const CHANGE_FAVORITE = 'CHANGE_FAVORITE';

/*
* action creator
*/
export function updateFavorite(favoriteList) {
    return {
        type: CHANGE_FAVORITE,
        payload: {
            favoriteList: favoriteList
        }
    };
}