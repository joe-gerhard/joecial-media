import { UserActions } from "../actions/userActions";
import { Reducer } from "redux";

export type User = {
    uid?: string;
    displayName?: string | null;
    photoURL?: string | null;
    email?: string | null;
    emailVerified?: boolean ;
    phoneNumber?: string | null;
} 

type UserState = {
    user: null | User
}

const initialState: UserState = {
    user: null,
}

const userReducer: Reducer<UserState, UserActions> = (state = initialState, action) => {
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }
        default:
            return state;
    }
}

export default userReducer;
