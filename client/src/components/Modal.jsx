import '../styles/modal.css'

function Modal(props) {

  return (
    <div className="modal-container">
      <div className="modal-inner">
        <div className='close-container'>
          <span className="close" onClick={props.closeModal}>&times;</span>
        </div>
        <div className='message-container'>
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;