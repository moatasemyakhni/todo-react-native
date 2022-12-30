import React from 'react';
import { useReducer } from 'react';
import TodoContext, { todosSliceInterface, initialState } from '../context/TodoContextAPI';

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
