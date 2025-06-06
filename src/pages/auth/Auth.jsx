import { useState } from "react"
import { Login } from "../../components/Login"
import { Register } from "../../components/Register"

import './authPage.css'

export const Auth = () => {

  const [isLogin, setIsLogin] = useState(true);

  const handleAuthPageToggle=()=>{
    setIsLogin((prev)=>!prev)
  }

  return (
    <div>
      {isLogin ?(
        <Login switchAuthHandler={handleAuthPageToggle}/>
      ):(
        <Register switchAuthHandler={handleAuthPageToggle}/>
      )}
    </div>
  )
}