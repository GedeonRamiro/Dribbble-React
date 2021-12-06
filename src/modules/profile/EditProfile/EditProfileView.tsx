import Button from "_common/components/Button"
import Input from "_common/components/Input"
import { IProfile } from "./EditProfile"

interface IProps {
    profile: IProfile
    name: string
    setName: (name: string) => void
    getEditProfile: () => void
}

const EditProfileView:React.FC<IProps> = ( { name, setName, profile, getEditProfile } ) => {

    return (
        <>
            {profile && (
                <div className='flex flex-col items-center justify-center my-32'>
                    <div className='w-full p-10 border rounded-md sm:w-auto'>
                        <h4 className='mb-1 text-sm font-semibold w-96'>Nome</h4>  
                        <div className='w-full'>
                            <Input 
                                type='text'
                                value={name} 
                                placeholder='Nome'
                                onChange={event => setName(event.target.value)}
                                width='w-full'
                            
                            />
                        </div>
                        <div className='w-full mt-8'>
                            <Button 
                                text='Atualizar perfil' 
                                width='w-full'
                                onClick={getEditProfile} 
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
        
    )
}

export default EditProfileView