import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userInterface {
    id?: string | unknown,
    name?: string | unknown,
    imageURL?: string | unknown,
    birthday?: string | unknown
};

export interface usersSliceInterface {
    currentUser?: userInterface,
    users?: Array<userInterface>,
};

const initialState: usersSliceInterface = {
    currentUser: {},
    users: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        deleteUser() {
            return initialState;
        },
        updateUserInfo(state, action: PayloadAction<userInterface>) {
            state.currentUser = action.payload;
        },
        addUserToUsersList(state, action: PayloadAction<userInterface>) {
            state.users?.push(action.payload);
        },
    }
});

export const {
    deleteUser,
    updateUserInfo,
    addUserToUsersList,
} = userSlice.actions;

export default userSlice.reducer;