import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import './App.css';
import 'firebase/compat/auth';
import { auth } from './firebase';
import React, { useEffect } from "react";
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user= useSelector(selectUser);
  const dispatch= useDispatch();

  useEffect(()=>{
    const unsubscribe= auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        console.log(userAuth);//logged in
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        })
        ); 
      }

      else
      {
        //logged out
        dispatch(logout())
      }
    });

    return unsubscribe;
  }, [dispatch]);
 
  return (
    <div className="app">
     
      <Router>
        {!user ?(
          <LoginScreen/>
        ):( 
        <Switch>
          <Route path='/profile'>
            <ProfileScreen/>
          </Route>
          <Route path="/">
            <HomeScreen/>
            </Route>
            </Switch>
          )}
       
      </Router>
    </div>
  );
}

export default App;
