import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';
import rootSaga from '../sagas';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import EncryptedStorage from 'react-native-encrypted-storage';
import {QuestionsRedux} from './questions-redux/QuestionsRedux';

export const createStore = () => {
  const middlewares: any = [];

  const middleware = createSagaMiddleware();
  middlewares.push(middleware);

  const sagaMiddleWare = () => middlewares;

  const persistConfig = {
    key: 'root',
    storage: EncryptedStorage,
  };

  const rootReducer = combineReducers({
    QuestionsRedux: QuestionsRedux.reducer,
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: sagaMiddleWare,
  });

  middleware.run(rootSaga);

  return {
    store,
    sagaMiddleWare,
  };
};
