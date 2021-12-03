import Input from "_common/components/Input"
import { IProfile } from "./EditProfile"

interface IProps {
    profile: IProfile
    name: string
    setName: (name: string) => void
    bio: string
    setBio: (name: string) => void
}

const EditProfileView:React.FC<IProps> = ( { profile, name, setName, bio, setBio } ) => {

    console.log(profile)


    return (
        <div className='flex flex-col items-center justify-center'>
            <div>
                <h4 className='mb-1 text-sm font-semibold'>Nome</h4>  
                <Input 
                    type='text'
                    value={profile.name} 
                    placeholder='Nome' 
                    onChange={event => setName(event.target.value)}
                />
                <h4 className='mt-8 mb-1 text-sm font-semibold'>Bio do usuário</h4>  
                <Input 
                    type='text'
                    value={profile.bio}
                    placeholder='Bio' 
                    onChange={event => setBio(event.target.value)}
                />
            </div>
        </div>
        
    )
}

export default EditProfileView