import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'




const Modal = ({ estaMostrando, esconder }) => estaMostrando ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="base" >
        <div className="modal-overlay"/>
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
            <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={esconder}>
                <span aria-hidden="true">&#88;</span>
            </button>
            </div>
            <p>
                Seu pedido foi realizado com sucesso !
            </p>
        </div>
        </div>
    </div>
  </React.Fragment>, document.body
) : null

export default Modal