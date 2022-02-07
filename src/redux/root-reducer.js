import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// allows a browser to cash our store
import {persistReducer} from 'redux-persist';  //accepts a configuration object as its first parameter
import storage from 'redux-persist/lib/storage'; //want to use localStorage as my default storage

const persistConfig = {
  key: 'root',  // sets the name of the top-level property in the persisted object. Your store’s state will be saved as the value of this property.
  storage, //storage defines the storage engine to use. For web use, the localStorage and sessionStorage APIs.
  whitelist: ['cart'] // only persist these keys
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});
export default persistReducer(persistConfig, rootReducer);