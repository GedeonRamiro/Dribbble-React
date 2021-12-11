

interface IProps {
    title: string
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
    textBtn: string
    closeModal: () => void
    handleOnClose: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    titlePost?: string
}

const ModalView: React.FC<IProps> = ( { title, onClick, textBtn, closeModal, handleOnClose, titlePost }) => {
    
    return (
        <div className="fixed inset-0 top-0 left-0 z-50 flex items-center justify-center h-screen px-4 bg-center bg-no-repeat bg-cover outline-none min-w-screen animated fadeIn faster focus:outline-none" >
            <div className="absolute inset-0 z-0 bg-black opacity-80" onClick={handleOnClose}></div>
            <div className="relative w-full max-w-lg p-5 mx-auto my-auto bg-white shadow-lg rounded-xl ">
            <div className="">
                <div className="justify-center flex-auto p-5 text-center">
                    {titlePost && (<h4 className="font-semibold text-xl mb-4">{titlePost}</h4>)}
                    <h4 className='text-lg'>{title}</h4>
                </div>
                
                <div className="p-3 mt-2 space-x-4 text-center md:block">
                    <button 
                        className="px-5 py-2 mb-2 text-sm font-medium tracking-wider text-gray-600 bg-white border rounded-full shadow-sm outline-none md:mb-0 hover:shadow-lg hover:bg-gray-100"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                    <button 
                        className="px-5 py-2 mb-2 text-sm font-medium tracking-wider text-white bg-pink-500 border border-pink-500 rounded-full shadow-sm outline-none md:mb-0 hover:shadow-lg hover:bg-pink-600"
                        onClick={onClick}       
                    > 
                        {textBtn}
                    </button>
                </div>
            </div>
            </div>
        </div>
)
   
}

export default ModalView