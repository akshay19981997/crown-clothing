import userEvent from '@testing-library/user-event';
import {initializeApp} from 'firebase/app';
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider,} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc,} from 'firebase/firestore'

//note doc bobe is actually to get Document, getDoc means to get data in that Dc and setDoc means to update data in doc


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDADX2U-iwVkm_V1WbZdhrquymVZPsUWWo",
    authDomain: "crwn-clothing-db-cf1ca.firebaseapp.com",
    projectId: "crwn-clothing-db-cf1ca",
    storageBucket: "crwn-clothing-db-cf1ca.appspot.com",
    messagingSenderId: "202517187474",
    appId: "1:202517187474:web:0b4f8852f4059ee135cf4b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({prompt :"select_account"});

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);


  //Creating db

  export const db = getFirestore();

  //db above will now be used to access and perform CRUD on data base it is now instance of firestore

  export const createUserDocumentFromAuth = async (userAuth) => {
   const userDocRef = doc(db,'users',userAuth.uid);
   console.log(userDocRef);

   const userSnapshot = await getDoc(userDocRef);
   console.log(userSnapshot);
   console.log(userSnapshot.exists());

   if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAT = new Date();

    try {
      await setDoc(userDocRef,{
        displayName,email,createdAT
      });
    } catch(error) {
      console.log('error creating the user', error.message);
    }
   }
   return userDocRef;

  }