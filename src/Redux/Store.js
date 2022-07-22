import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';
import logger from 'redux-logger';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer,applyMiddleware(thunk, logger));
let persistor = persistStore(store);
export {store, persistor};