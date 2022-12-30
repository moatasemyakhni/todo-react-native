import React from 'react';

export interface todoInterface {
  id?: number,
  title?: string,
  description?: string,
  date?: string,
  image?: string,
};

export interface todosSliceInterface {
  todos?: Array<todoInterface>,
};

export const initialState: todosSliceInterface = {
  todos: [],
};

const TodoContextAPI = React.createContext<[todosSliceInterface, React.Dispatch<React.SetStateAction<todosSliceInterface>>]>([
  initialState,
  () => initialState
]);

export default TodoContextAPI;