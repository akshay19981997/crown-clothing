
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {auth,createUserDocumentFromAuth,signInWithGoogleRedirect} from "../../utils/firbase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import { useState } from "react";
import './authentication.styles.scss'

const Authentication = () => {
    // console.log("Sign in");
    // useEffect(()=>{
    //     console.log("UseEffect Run")
    //     async function fetchData() {
    //     const response = await getRedirectResult(auth);
    //     console.log(response);
    //     const userDocRef = await createUserDocumentFromAuth(response.user);    
    // }
    // fetchData();
        
    // },[])

    

   
   
    // console.log("Before useEffect")
    return(
        <div className="authentication-container">
        <SignInForm/>
        {/* <button onClick={signInWithGoogleRedirect}>Sign in with google Redirect</button> */}
        <SignUpForm />
        </div>
    )
}

export default Authentication