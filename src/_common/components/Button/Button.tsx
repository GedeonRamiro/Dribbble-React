import loadingsvg from 'assets/images/loading.svg'

interface IProps {
    text: string
    isDisabled?: boolean
    loading?: boolean
    onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void
    width?: string;
    hover?: string
    
}

const Button: React.FC<IProps> = ({ text, isDisabled, loading, onClick, width, hover }) => {

    const ButtonClass = `
        relative 
        flex 
        items-center
        justify-center 
        ${width || 'w-full'} 
        py-2 
        text-xs 
        font-semibold 
        text-white 
        bg-pink-500 
        rounded-md 
        outline-none 
        disabled:cursor-default 
        lg:${width || 'w-44'}
        disabled:opacity-50
        duration-200 
        transform
        hover:${hover || 'none'}
    `

    return(
        <button disabled={isDisabled} onClick={onClick} className={ButtonClass}>
                {loading ? (
                    <img className='w-4 h-4' src={loadingsvg} alt='loading' />
                ) : (
                   <p> {text} </p>
                )}
        </button>
    )
}

export default Button