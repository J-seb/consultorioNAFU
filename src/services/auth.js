import firebase from './firebase';

const actionCodeSettings = {
    url: 'https://frb-consultorionaf.firebaseapp.com/',
    handleCodeInApp: true,
};
  
export const sendEmailToUser = async (email) => {
    try {
        await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
        window.localStorage.setItem('emailForSignIn', email);
    } catch (error) {
        console.log(error.code, error.message)
    }
};