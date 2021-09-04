import {combineReducers} from 'redux'
import userReducer from './user/user-reducer';
import CartReducer from './cart/cart.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

//contain the posible configuration that we want for redux to persist use
const persistConfig={
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
user: userReducer,
cart : CartReducer,
directory: directoryReducer,
shop: shopReducer

})

export default persistReducer(persistConfig,rootReducer)