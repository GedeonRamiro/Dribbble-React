import UploadView from './UploadView'
import { useEffect, useState } from "react"
import { useHistory, useLocation } from 'react-router-dom'
import toast from 'react-hot-toast';
import { apiWithAuth } from '_common/services/api'

export interface IPost {
    id: string
    image_url: string,
    title: string
    description: string
}

const Upload = () => {

    const history = useHistory()
    const { state } = useLocation<IPost>()

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

    const EditPost = async () => {
        try {
            setLoading(true)
            await apiWithAuth.put(`/posts/${state.id}`, {title, description})
            toast.success('Post atualizado com sucesso!')
            history.push('/profile')

        } catch (error: any) {
            console.log({error})
            toast.error(error?.response?.data?.message)
        }
        setLoading(false)
    }
    
    useEffect(() => {
        if(!title && !description ) {
        return (setTitle(state?.title), setDescription(state?.description))

        } 
            setTitle('')
            setDescription('')

         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state?.description, state?.title])

    
    return (
        <>
            <UploadView
            {...{
                title, setTitle,
                description, setDescription,
                file, setFile,
                isDisabled,
                createPost, EditPost,
                loading, setLoading,
                up,
                state
            }}
             />
        </>
    )
}

export default Upload