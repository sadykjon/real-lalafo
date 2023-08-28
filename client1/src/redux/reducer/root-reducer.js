import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer';
import { postReducer } from './post-reducer';
import {LikeReducer } from './like-reducer';

export const rootReducer = combineReducers({
    authReducer,
    postReducer,
    LikeReducer
})