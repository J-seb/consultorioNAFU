import { getAuth, isSignInWithEmailLink, signInWithEmailLink, signOut } from "firebase/auth";

export const verifyUser = async () => {
    try {
        const auth = getAuth();
        if (isSignInWithEmailLink(auth, window.location.href)) {
            let email = window.localStorage.getItem('user');
            console.log(email);
            if (!email) {
                email = window.prompt('Please provide your email for confirmation');
            }

            await signInWithEmailLink(auth, email, window.location.href)
            window.localStorage.removeItem('user');
            return true;
        }

    } catch (error) {
        console.log(error)
    }  
}

export const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
}