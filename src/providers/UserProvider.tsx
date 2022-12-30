import React from 'react';
import UserContextAPI from '../context/UserContextAPI';

import { useReducer } from 'react';
import { UserAction, initialState, UsersSliceInterface } from '../context/UserContextAPI';

const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [state, dispatch] = useReducer((state: UsersSliceInterface, action: UserAction) => {
        switch (action.type) {
        case 'DELETE_USER':
            return initialState;
        case 'UPDATE_USER_INFO':
            return { ...state, currentUser: action.payload };
        case 'ADD_USER_TO_USERS_LIST':
            return { ...state, users: [...state.users, action.payload] };
        default:
            return state;
        }
    }, initialState);

    return (
        <UserContextAPI.Provider value={[state, dispatch]}>
            { children }
        </UserContextAPI.Provider>
    );
}

export default UserProvider;