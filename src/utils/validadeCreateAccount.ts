import validadeEmail from "./validadeEmail"

export default function validadeCreateAccount(
    name: string, 
    email: string, 
    password: string) {
   
    if(name === '' || email === '' || password === ''){
        return 'Campos name, emial e password não pode ser vazio!'
    }

    if(!validadeEmail(email)){
        return 'E-mail inválido'
    }
    
    if(password.length < 8){
        return 'Senha no mínimo 8 caracteres!'
    }

    return true

}