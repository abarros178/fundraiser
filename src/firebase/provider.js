import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth'
import { FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {

        const errorCode = error.code
        const errorMenssage = error.errorMenssage
        return {
            ok: false,
            errorCode: errorCode,
            errorMenssage: errorMenssage,
        }

    }
}
export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

        const { photoURL, uid } = result.user
        await updateProfile(FirebaseAuth, { displayName })
            
        return {
            ok: true,
            photoURL,
            uid
        }
    } catch (error) {

        const errorCode = error.code
        const errorMenssage = error.errorMenssage
        return {
            ok: false,
            errorCode: errorCode,
            errorMenssage: errorMenssage,
        }

    }
}


