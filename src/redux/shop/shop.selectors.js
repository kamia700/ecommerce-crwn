import {createSelector} from 'reselect';
// import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

const COLLECTION_ID_MAP = {
  accessories: 1,
  shoes: 2,
  clothing: 3,
  womens: 4,
  mens: 5,
};

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);


export const selectCollection = (collectionUrlParam) =>
createSelector(
  [selectCollections],
  collections => collections.find(
    // find collection.id matching the url parameter of our collection id map
    collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
);




// Memoize does the same idea of memoization as reselect does for our selectors, except this time we're memoizing the return of our function which returns our selector. By wrapping this function is memoize, we're saying that whenever this function gets called and receives collectionUrlParam, I want to memoize the return of this function (in this case we return a selector). If this function gets called again with the same collectionUrlParam, don't return this function because we'll return the same value as last time, which we've memoized so just return the selector that's been stored.
// export const selectCollection = collectionUrlParam =>
//   createSelector(
//     [selectCollections],
//     collections => collections[collectionUrlParam]
//   );