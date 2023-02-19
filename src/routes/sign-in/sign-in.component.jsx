import { signInWithGooglePopup } from "../../utils/firbase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {auth,createUserDocumentFromAuth,signInWithGoogleRedirect} from "../../utils/firbase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
const SignIn = () => {
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
    const logGoogleUser = async() =>
    {
        
            const {user} = await signInWithGooglePopup();
            console.log(user);
            const userDocRef = await createUserDocumentFromAuth(user);

            
            
            
    }
   
    // console.log("Before useEffect")
    return(
        <>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with google popup</button>
        {/* <button onClick={signInWithGoogleRedirect}>Sign in with google Redirect</button> */}
        <SignUpForm />
        </>
    )
}

export default SignIn