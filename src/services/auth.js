import firebase from './firebase';

const actionCodeSettings = {
    // url: 'http://localhost:3000/validate',
    url: 'https://frb-consultorionaf.firebaseapp.com/validate',
    handleCodeInApp: true,
};
  
export const sendEmailToUser = async (email) => {
    try {
        await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
        window.localStorage.setItem('user', email);
    } catch (error) {
        console.log(error.code, error.message)
    }
};