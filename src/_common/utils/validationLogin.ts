import validationEmail from './validationEmail'

export default function validationCreateAccount (
    email: string,
    password: string
) {

    if(email === '' || password === ''){
        return 'Campos email e senha não pode ser vazio!'
    }

    if(!validationEmail(email)){
        return 'Email inválido!'
    }

    if(password.length < 8){
        return 'Senha no mínimo 8 caracteres!'
    }

    return true

}