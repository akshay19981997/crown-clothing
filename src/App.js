
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
// import SignIn from './routes/sign-in/sign-in.component.jsx';
import Authentication from './routes/authentication/authentication.component.jsx';

const ShopNew = () => {
  return (
    <h1>Rock it and Roll it</h1>
  )
}
 const App=() =>{

 return (
  <Routes>
    
    <Route path='/' element={<Navigation/>}>
      <Route index element={<Home />}/>
      <Route path='shop' element={<ShopNew />}/>
      <Route path='auth' element={<Authentication />}/>
    </Route>
  
  </Routes>
 )

  
}

export default App;
