import { User } from "firebase";

export interface ISetUserAction {
  readonly type: 'SET_USER';
  user: null | User;
}

export type UserActions = 
| ISetUserAction
