
import { registerUserWithEmailPassword, signInWithGoogle } from "../../../firebase/provider";
import { checkingCredentials, login, logout } from "./authSlice";


export const checkingAuthentication = ({ email, password }) => {
    return (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle()
        console.log(result)
        if (!result.ok) return dispatch(logout(result.errorMenssage))
        dispatch(login(result))
    }
}
export const startCreateUserWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await registerUserWithEmailPassword({email,password})
        
        if (!result.ok) return dispatch(logout({errorMenssage:result.errorCode}))
        dispatch(login(result))
    }
}

