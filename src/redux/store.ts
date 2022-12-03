import userReducer from './slices/usersSlice';
import todosReducer from './slices/todosSlice';

import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer: {
        user: userReducer,
        todos: todosReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;