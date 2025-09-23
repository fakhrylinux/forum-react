import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer.js';
import usersReducer from './users/reducer.js';
import threadsReducer from './threads/reducer.js';
import threadDetailReducer from './threadDetail/reducer.js';
import isPreloadReducer from './isPreload/reducer.js';
import { loadingBarReducer } from 'react-redux-loading-bar';

const store = configureStore({
  reducer: {
    isPreload: isPreloadReducer,
    authUser: authUserReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
