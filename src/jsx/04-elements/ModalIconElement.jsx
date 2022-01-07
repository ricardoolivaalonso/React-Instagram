import parse from 'html-react-parser'

export const ModalIconElement = ({svg}) => <a href="#placholder" className="modal__action">{parse(`${svg}`)}</a>
    