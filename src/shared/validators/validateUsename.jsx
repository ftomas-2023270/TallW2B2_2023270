export const validateUsername = async (username) => {
    const regex = /^\S{3,8}$/;
    return regex.test(username)
}

export const validateUsernameMessage= 'El nombre del usuario debe llevar de 3 a 8 caracteres sin espacio'