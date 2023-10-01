import { Outlet,Link } from "react-router-dom";
import './navigation.styles.scss';
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import {signOutUser} from '../../utils/firbase.utils'

const Navigation = () => {
  const {currentUser,setUserData} = useContext(UserContext);
  console.log(currentUser);
  // let flag=false;
  const signOutHandler = async() => {
         await signOutUser();
         setUserData(null);
        
  } 
  return (
      <>
        <div className='navigation'>
            <Link className="logo-container" to='/'><div >Logo</div></Link>
            
            
            <div className='nav-links-container'>
            <Link className="nav-link" to='/shop'>SHOP</Link>
            
            {currentUser?(<Link className="nav-link" onClick={signOutHandler} to='/auth'>SIGN OUT</Link>):(<Link className="nav-link" to='/auth'>SIGN IN</Link>)}
            
            </div>
        </div>
        <Outlet/>
        </>
      
    )
  }
  export default Navigation