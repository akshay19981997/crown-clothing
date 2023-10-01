import { useState } from "react"
import { signInWithGooglePopup ,signInAuthUserWithEmailAndPassword} from "../../utils/firbase.utils";
import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from '../../utils/firbase.utils'
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-in-form.styles.scss';
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
const SignInForm = () =>{
    const defaultFormFields = {
        
        email:'',
        password:'',
        
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;
    const {setUserData}=useContext(UserContext);
    console.log(formFields)
    const logGoogleUser = async() =>
    {
        
            const {user} = await signInWithGooglePopup();
            console.log(user);
            const userDocRef = await createUserDocumentFromAuth(user);

            
            
            
    }  

const handleChange = (event) => {
    // let k= event.target.value;
    // setInputValue({displayName:k});
    const {name,value}=event.target;
    setFormFields({...formFields,[name]:value});
}
const resetFormFields = () => {
    setFormFields(defaultFormFields)
}

const handleSubmit = async (event) => {
    event.preventDefault();
    
  
    try {
    const response = await signInAuthUserWithEmailAndPassword(email,password);
    console.log(response)
    resetFormFields(); 
    setUserData(response);
    }
    catch(error){
     alert(error.code);
    }
}

return(
    
    <div className="sign-up-container">
    <h1>I already have an account</h1>
    <span>Sign In with your email and password</span>
    <form onSubmit={handleSubmit}>
    <FormInput label="email" type="text" required   onChange={handleChange} name="email" value={email}/>
    <FormInput label="password" type="password" required   onChange={handleChange} name="password" value={password}/>
    <div className="buttons-container">
    <Button type="submit">SIGN IN</Button>
        
    <button type="button" onClick={logGoogleUser}>Sign in with google popup</button>
    </div>
     
    </form>
    </div>
)

}

export default SignInForm