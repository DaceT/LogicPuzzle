import * as firebase from 'firebase';

function googleSignIn() {

    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(result.user.email);
        return result.user.email;
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    }).then((email) => {
        let promptResponse = prompt("Please enter your name.")
        if(promptResponse == undefined) {
            console.log("Name not entered")
            let promptResponse = null;
        }
        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
            name: promptResponse,
            email: email,
            id: firebase.auth().currentUser.uid,
        })
        
    });
    return true
}


export default googleSignIn;