export const validateEmail =(email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email); 
}

export const validateEmailMessage= 'Ingresa una direccion de correo electronico valido';