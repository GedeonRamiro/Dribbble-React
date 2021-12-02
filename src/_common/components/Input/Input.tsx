import React from "react"

interface IProps{
    width?: string
    type: string
    placeholder?: string
    value?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>

}

const Input: React.FC<IProps>  = ({ type, placeholder, width, value, onChange }) => {

    const InputClass = `
        px-3 
        py-2
        text-sm 
        bg-gray-100 
        border 
        border-transparent 
        rounded-md 
        outline-none 
        ${width || 'sm:w-96'}
        w-80
        focus:bg-white 
        focus:ring-4 
        focus:ring-pink-100 
        focus:border-pink-300
        text-sm
    `
  
    return (
        <input 
            type={type}
            placeholder={placeholder}
            className={InputClass}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input