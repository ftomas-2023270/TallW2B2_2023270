export const validateTitle = (title)=>{
    return title.length >= 3 && title.length<=30;
}

export const validateTitleMessage = 'El titulo debe tener entre 3 a 30 caracteres';