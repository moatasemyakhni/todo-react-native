import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface todoInterface {
    id?: number,
    title?: string,
    description?: string,
    date?: string,
    image?: string,
};

export interface usersSliceInterface {
    todos?: Array<todoInterface>,
};

const initialState: usersSliceInterface = {
    todos: [],
};

const todosSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateTodos(state, action: PayloadAction<Array<todoInterface>>) {
            state.todos = action.payload;
        },
    }
});

export const {
    updateTodos,
} = todosSlice.actions;

export default todosSlice.reducer;