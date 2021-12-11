
import ModalView from './ModalView'

interface IProps {
    title: string
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
    textBtn: string
    isOpenModal: (modal: boolean) => void
    titlePost?: string
}

const Modal: React.FC<IProps> = ( { title, onClick, textBtn, isOpenModal, titlePost}) => {


    const handleOnClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if(event.target === event.currentTarget){
                isOpenModal(false)
            }
    }

    const closeModal = () => isOpenModal(false)

    return (
          <ModalView {...{title, onClick, textBtn, closeModal, handleOnClose, titlePost }} />
    )
}

export default Modal