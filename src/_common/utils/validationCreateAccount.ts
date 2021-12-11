import validationEmail from './validationEmail'

export default function validationCreateAccount (
    name: string,
    email: string,
    password: string
) {

    if(name === '' || email === '' || password === ''){
        return 'Campos nome, email e senha não pode ser vazio!'
    }

    if(!validationEmail(email)){
        return 'Email inválido!'
    }

    if(password.length < 8){
        return 'Senha no mínimo 8 caracteres!'
    }

    return true

}