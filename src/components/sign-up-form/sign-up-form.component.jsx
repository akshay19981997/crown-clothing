import { useState,useContext } from "react"
import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from '../../utils/firbase.utils'
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";
const SignUpForm = () =>{
    const defaultFormFields = {
        displayName :'',
        email:'',
        password:'',
        confirmPassword:''
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;
    const {setUserData}=useContext(UserContext);
    console.log(formFields)
    

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
    if(password !== confirmPassword) {
        alert("Password did not matched");
        return;
    }
  
    try {
    const {user} = await createAuthUserWithEmailAndPassword(email,password);
    console.log(user);
    const userDocRefNew = await createUserDocumentFromAuth(user,{'displayName':displayName});
    resetFormFields();
    setUserData(user);
    }
    catch(error){
        console.log("Error encountered", error);
        alert(error.code);
    }
}

return(
    
    <div className="sign-up-container">
    <h2>Don't have an account</h2>
    <span>Sign up with your email and password</span>
    <form onSubmit={handleSubmit}>
     {/* <label >Display Name</label>
     <input type="text" required  onChange={handleChange} name="displayName" value={displayName} /> */}
     <FormInput label="Display Name" type="text" required   onChange={handleChange} name="displayName" value={displayName}/>

     {/* <label >Email</label>
     <input type="email" required onChange={handleChange} name="email" value={email} /> */}
     <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

     {/* <label >Password</label>
     <input type="password" required onChange={handleChange} name="password" value={password}/> */}
     <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

     {/* <label >Confirm Password</label>
     <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/> */}
     <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

     <Button type="submit">Sign Up</Button>
    </form>
    </div>
)

}

export default SignUpForm