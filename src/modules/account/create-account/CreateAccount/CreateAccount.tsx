import { useState } from 'react'
import toast from 'react-hot-toast';
import createAccountService from '../../services/create-account.services'
import { useHistory } from 'react-router-dom'
import AccountView from './AccountView'
import validationCreateAccount from '_common/utils/validationCreateAccount'


const CreateAccount = () => {

    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const history = useHistory()
    
    const isDisabled = name === '' || email === ''|| password === '' || !checkbox || loading
    const validation =  validationCreateAccount(name, email, password)
    
    const createAccount = async () => {
        
        if(typeof validation === 'string'){
            return toast.error(validation);
        }
       
        try {
            setLoading(true)
            await createAccountService.postUsers({
                name, bio, email, password
            })
            toast.success('Conta criada com sucesso!');
            history.push('/login')

        } catch (error: any) {
            console.log({error})
            toast.error(error?.response?.data?.message || 'Não foi possível criar a conta!');
            
        }

            setLoading(false)
    }

  
    return (
        <AccountView {...{
            name, setName,
            bio, setBio,
            email, setEmail,
            password, setPassword,
            checkbox, setCheckbox,
            loading, setLoading,
            isDisabled,
            createAccount
        }} />
    )
}

export default CreateAccount