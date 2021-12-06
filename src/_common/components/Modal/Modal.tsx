import ModalView from './ModalView'

interface IProps {
    title: string
}

const Modal: React.FC<IProps> = ( { title }) => {

    

    return (
          <ModalView {...{title }} />
    )
}

export default Modal