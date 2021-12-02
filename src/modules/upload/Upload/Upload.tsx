import UploadView from './UploadView'
import { useState } from "react"
import { useHistory } from 'react-router-dom'
import toast from 'react-hot-toast';
import { apiWithAuth } from '_common/services/api'



const Upload = () => {

    const history = useHistory()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState('')
    const [loading, setLoading] = useState(false)
    

    const isDisabled = loading
        

    const up = (e: any) => {
        setFile(e.target.files[0])
    }
    
    
    const createPost = async () => {
          

        
        let formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("file", file);
        

        try {
            setLoading(true)
            await apiWithAuth.post('/posts', formData, {    
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            toast.success('Post criado com sucesso!')
            history.push('/')

        } catch (error: any) {
            console.log({error})
            toast.error(error?.response?.data?.message)
        }
        setLoading(false)
    }

    
    return (
        <>
            <UploadView
            {...{
                title, setTitle,
                description, setDescription,
                file, setFile,
                isDisabled,
                createPost,
                loading, setLoading,
                up
            }}
             />
        </>
    )
}

export default Upload