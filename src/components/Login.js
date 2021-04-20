import React from 'react'
import './login.css'
import {auth, provider} from '../firebase/firebase'
import { Button } from '@material-ui/core'
import{useDispatch} from 'react-redux'
import {setuser} from '../redux/action'
function Login() {
const dispatch = useDispatch()

   const signin =()=>{
auth.signInWithPopup(provider).then(user=>{
    console.log(user.user)
    dispatch(setuser({
        displayName:user.user.displayName,
        email:user.user.email,
        photoURL:user.user.photoURL


    }))
}).catch(err=>alert(err))
   }
    return (
        <div className="login">
           <div className="login_container" >
            <img src="https://1000logos.net/wp-content/uploads/2018/05/Gmail-logo.png" alt=""/>

        <Button variant="contained" color="primary" onClick={signin}>Sign in</Button>
           </div>
        </div>
    )
}

export default Login
