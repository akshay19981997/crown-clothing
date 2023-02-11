import { signInWithGooglePopup } from "../../utils/firbase.utils";
import {createUserDocumentFromAuth} from "../../utils/firbase.utils";
const SignIn = () => {
    const logGoogleUser = async() =>
    {
        
            const {user} = await signInWithGooglePopup();
            console.log(user);
            const userDocRef = await createUserDocumentFromAuth(user);
            
    }
    
    return(
        <>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with google popup</button>
        </>
    )
}

export default SignIn