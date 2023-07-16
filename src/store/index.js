import { configureStore } from '@reduxjs/toolkit';
import { api } from '../slices/api';

export const createStore = () => configureStore({

  reducer: {
    [api.reducerPath]: api.reducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware()
    .concat(api.middleware)

});
