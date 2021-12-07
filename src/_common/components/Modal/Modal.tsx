
import ModalView from './ModalView'

interface IProps {
    title: string
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
    textBtn: string
    setModal: (modal: boolean) => void
}

const Modal: React.FC<IProps> = ( { title, onClick, textBtn, setModal}) => {


    const handleOnClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log(event.target)
            if(event.target === event.currentTarget){
                setModal(false)
            }
    }

    const closeModal = () => {
        console.log(`fechare modal`)
        setModal(false)
    }

    return (
          <ModalView {...{title, onClick, textBtn, closeModal, handleOnClose }} />
    )
}

export default Modal