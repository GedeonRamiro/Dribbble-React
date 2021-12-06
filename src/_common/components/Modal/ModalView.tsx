

interface IProps {
    title: string
}

const ModalView: React.FC<IProps> = ( { title }) => {
    return (
        <div className="fixed inset-0 top-0 left-0 z-50 flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover outline-none min-w-screen animated fadeIn faster focus:outline-none" >
            <div className="absolute inset-0 z-0 bg-black opacity-80"></div>
            <div className="relative w-full max-w-lg p-5 mx-auto my-auto bg-white shadow-lg rounded-xl ">
            <div className="">
                <div className="justify-center flex-auto p-5 text-center">
                    <h4 className='text-lg'>{title}</h4>
                </div>
                
                <div className="p-3 mt-2 space-x-4 text-center md:block">
                    <button className="px-5 py-2 mb-2 text-sm font-medium tracking-wider text-gray-600 bg-white border rounded-full shadow-sm md:mb-0 hover:shadow-lg hover:bg-gray-100">
                        Cancel
                    </button>
                    <button className="px-5 py-2 mb-2 text-sm font-medium tracking-wider text-white bg-red-500 border border-red-500 rounded-full shadow-sm md:mb-0 hover:shadow-lg hover:bg-red-600">Delete</button>
                </div>
            </div>
            </div>
        </div>
)
   
}

export default ModalView