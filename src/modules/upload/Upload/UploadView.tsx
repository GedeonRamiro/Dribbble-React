
import Button from "_common/components/Button"
import Input from "_common/components/Input"
import { FaUpload } from 'react-icons/fa'
import { IPost } from './Upload'


interface IProps {
    title: string
    setTitle: (title: string) => void
    description: string
    setDescription: (description: string) => void
    file: string
    isDisabled: boolean
    loading: boolean
    createPost: (ev: React.MouseEvent<HTMLButtonElement>) => void 
    EditPost: (ev: React.MouseEvent<HTMLButtonElement>) => void 
    up?: (ev: React.ChangeEvent<HTMLInputElement>) => void
    state: IPost
}

const UploadView: React.FC<IProps> = ( {
    title, setTitle,
    description, setDescription,
    file,
    isDisabled,
    createPost, EditPost,
    loading,
    up,
    state
} ) => {

    return(
        <div className='flex justify-center '>
            <div className='w-full my-20 lg:mx-72'>
                <h4 className='text-2xl font-semibold text-center lg:text-4xl'>{state?.title ? 'Editar ' : 'Criar ' }Post</h4>
                {!state?.title ? (
                    <div className="flex items-center justify-center my-4 bg-grey-lighter">
                        <label className="flex flex-col items-center w-full px-4 py-6 tracking-widest text-pink-500 uppercase bg-gray-100 border rounded-lg cursor-pointer hover:bg-pink-500 hover:text-white">
                            <FaUpload size={24} />
                            <span className="mt-2 text-sm leading-normal">carregar imagem</span>
                            <input 
                                type='file'
                                name='image' 
                                className="hidden"
                                onChange={up}  
                            />
                        </label>
                    </div>
                ) : (
                    <img className='my-6 rounded-md shadow-lg' src={state?.image_url} alt={state?.title} />
                )}
                
                {file && <img className='w-full mb-10' src={URL.createObjectURL(file)} alt={file} /> }
               
                <h4 className='mb-1 text-sm font-semibold'>Título</h4>  
                <Input 
                    type='text'
                    width='w-full'
                    placeholder='Título do Post'
                    value={title}
                    onChange={event => setTitle(event.target.value)} 
                />
                
                <div className='py-10'>
                    <h4 className='mb-1 text-sm font-semibold'>Descrição</h4>  
                    <textarea 
                        className="w-full h-64 px-3 py-2 text-sm bg-gray-100 border border-transparent rounded-md outline-none focus:bg-white focus:ring-4 focus:ring-pink-100 focus:border-pink-300" 
                        placeholder='Descrição do Post'
                        value={description}
                        onChange={event => setDescription(event.target.value)}  
                    />
                </div>
                        
               
                <div className='mt-6'>
                    <Button 
                        text={state?.title ? 'Atualizar' : 'Salvar'} 
                        width='w-full' 
                        onClick={state?.title ? EditPost : createPost} 
                        {...{isDisabled, loading}} 
                    />
                </div>

            </div>
        </div>
    )
}

export default UploadView