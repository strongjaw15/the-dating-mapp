function Modal(props) {


  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.closeModal}>&times;</span>
        <p>{props.message}</p>
      </div>
    </div>
  );
}

export default Modal;