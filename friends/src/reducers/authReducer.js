import { LOGIN, LOGOUT } from "../actions/authActions"

const initialState = {
    isLoggedIn: false
}

function reducer (state = initialState, action){
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true
            }

        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            }

        default:
            return state
    }
}

export default reducer