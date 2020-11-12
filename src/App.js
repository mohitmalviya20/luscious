import React, { useEffect } from 'react';
import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './components/firebase';
import {login, logout} from "./features/userSlice"
import Cart from './components/Cart';



function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(
          login({
            uid:authUser.uid,
            photo:authUser.photoURL,
            email:authUser.email,
            displayName: authUser.displayName
          })
        )

      }
      else{
        dispatch(logout())

      }
    })

  },[dispatch])
  return (
  
    <Router>
    <div className="App">
      {
        user?(
          <>
          <Switch>
    <Route path="/cart">
     <Navbar/>
     <Cart/>
     </Route>
        
     <Route path="/profile">
     <Navbar/>
     <Profile/>
     </Route>
     <Route path="/restaurant">
     <Navbar/>
     <RestaurantMenu/>
     </Route>
     <Route path="/">
       <Navbar/>
       <Body/> 
     </Route>

     </Switch>
          </>
        ):(<Login/>)
      }
      
    </div>
    </Router>

   
  );
}

export default App;
