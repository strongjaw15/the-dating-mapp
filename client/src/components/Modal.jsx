import '../styles/modal.css'

function Modal(props) {

  return (
    <div className="modal-container">
      <div className="modal-inner">
        <span className="close" onClick={props.closeModal}>&times;</span>
        <p>{props.message}</p>
      </div>
    </div>
  );
}

export default Modal;