import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useLogin = ()=>{
    
    const [isLoading, setIsLoaging]= useState(false)

    const navigate= useNavigate();

    const login = async (email, password) => {
        
        setIsLoaging(true);

        const response = await loginRequest({email, password})
    
        setIsLoaging(false);

        console.log(response)

        if( response.error){
            return toast.error(response.error?.response?.data || 'Ocurrio un error al iniciar sesion, intenta de nuevo')
        }

        const {userDetails}= response.data

        localStorage.setItem('user',JSON.stringify(userDetails));
        
        navigate('/')
    }

    return {
        login,
        isLoading,
    }
}
