import validationEmail from "./validationEmail"

export default function validationAccount(
    email: string, 
    password: string) {
   
    if(email === '' || password === ''){
        return 'Campos emial e password não pode ser vazio!'
    }

    if(!validationEmail(email)){
        return 'E-mail inválido'
    }
    
    if(password.length < 8){
        return 'Senha no mínimo 8 caracteres!'
    }

    return true

}