import { configureStore } from "@reduxjs/toolkit";
import { musicApi, userApi } from '../services/music';
import  addPlayListMusic  from './playListSlice';
import  addAuthor from "./filterSlice";

export const store = configureStore({
    reducer: {
        [musicApi.reducerPath]: musicApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        addPlayListMusic,
        addAuthor,    
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicApi.middleware).concat(userApi.middleware),
});