import { User } from "firebase";
import { UserActions } from "../actions/userActions";
import { Reducer } from "redux";

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
