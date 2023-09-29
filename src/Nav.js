import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { useHistory } from 'react-router-dom';

function Nav() {
    const[show,handleshow]=useState(false);
    const history= useHistory()

    const transitionNavBar= ()=>{ 
        if(window.scrollY>100){
            handleshow(true);
        }
        else{
            handleshow(false);
        }
    };

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return()=>window.removeEventListener("scroll",transitionNavBar);
    },[]);

  return (
    <div className={`nav ${show && "nav__black"}`}>  
        <div className='nav__contents'>

        <img 
        onClick={()=>history.push("/")}
        className='nav__logo'
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
        alt=''
        />

        <img
        onClick={()=>history.push("/profile")}
        className='nav__avatar' 
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt=""
        />
        </div>

    </div>
  )
}

export default Nav