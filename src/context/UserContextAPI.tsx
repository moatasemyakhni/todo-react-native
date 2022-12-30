import { createContext } from 'react';

export interface UserInterface {
  id?: string | unknown,
  name?: string | unknown,
  imageURL?: string | unknown,
  birthday?: string | unknown
};

export interface UsersSliceInterface {
  currentUser?: UserInterface,
  users?: Array<UserInterface>,
};

export interface UserAction {
  type: string,
  payload?: UserInterface
};

export const initialState: UsersSliceInterface = {
  currentUser: {},
  users: [],
};

const UserContextAPI = createContext<[UsersSliceInterface, React.Dispatch<UserAction>]>([
  initialState,
  () => initialState
]);

export default UserContextAPI;