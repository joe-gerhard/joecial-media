import { User } from "../reducers/userReducer";

export interface ISetUserAction {
  readonly type: 'SET_USER';
  user: null | User;
}

export type UserActions = 
| ISetUserAction
