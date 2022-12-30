import React from 'react';
import TodoContext from '../context/TodoContextAPI';

import { useReducer } from 'react';
import { todosSliceInterface, initialState } from '../context/TodoContextAPI';

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    //useReducer to manage the state
    const [state, dispatch] = useReducer((state: todosSliceInterface, action: React.SetStateAction<todosSliceInterface>) => {
        return { ...state, ...action };
    }, initialState);

    return (
        <TodoContext.Provider value={[state, dispatch]}>
        {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
